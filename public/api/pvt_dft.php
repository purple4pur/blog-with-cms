<?php
require_once './consts/dbConst.php';
require_once './verify_token.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Request-Method: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json; charset=utf-8');

$_POST = json_decode(file_get_contents("php://input"), true);

$authorID = verify_token($_POST["decoratedToken"])["activeUserID"];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

switch ($_POST["type"]) {
    case "private":
        $type = 2;
        break;
    case "draft":
        $type = 3;
        break;
    default:
        die(json_encode([
            "errCode" => 11,
            "errMsg" => "Error: Wrong type.",
        ], JSON_UNESCAPED_UNICODE));
}

$sql_get_info = "SELECT
                    post_info.post_id AS id,
                    post.time,
                    post.title,
                    post.content,
                    author.name AS author
                FROM post_info, post, author
                WHERE
                    post_info.author_id=? AND
                    post_info.post_id=post.id AND
                    post_info.author_id=author.id AND
                    post_info.plc_pvt_dft=?
                ORDER BY post.time DESC";
$sql_get_tag = "SELECT
                    tag.id,
                    tag.name
                FROM post_tag, tag
                WHERE
                    post_tag.post_id=? AND
                    tag.id=post_tag.tag_id";

if ($stmt = $conn->prepare($sql_get_info)) {
    $stmt->bind_param("ii", $authorID, $type);
    $stmt->execute();
    $stmt->bind_result($id, $time, $title, $content, $author);
    $result = [];
    while ($stmt->fetch()) {
        $row = [
            "id" => $id,
            "time" => $time,
            "title" => $title,
            "content" => $content,
            "author" => $author,
        ];

        array_push($result, $row);
    }

    if ($stmt->num_rows === 0) {
        $stmt->close();
        $conn->close();
        die(json_encode([
            "errCode" => 8,
            "errMsg" => "Error: No result.",
        ], JSON_UNESCAPED_UNICODE));
    }
    $cnt = $stmt->num_rows;
    $stmt->close();

} else {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

for ($i = 0; $i < $cnt; $i++) {
    if ($stmt = $conn->prepare($sql_get_tag)) {
        $stmt->bind_param("i", $result[$i]["id"]);
        $stmt->execute();
        $stmt->bind_result($id, $name);
        $tags = [];
        while ($stmt->fetch()) {
            $tag = [
                "id" => $id,
                "name" => $name,
            ];
            array_push($tags, $tag);
        }
        $stmt->close();
        $result[$i]["tags"] = $tags;

    } else {
        die(json_encode([
            "errCode" => 1,
            "errMsg" => "Error: " . $conn->connect_error,
        ], JSON_UNESCAPED_UNICODE));
    }
}

$conn->close();

echo json_encode($result, JSON_UNESCAPED_UNICODE);
