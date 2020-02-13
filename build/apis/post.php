<?php
require_once './consts/dbConst.php';

header('Access-Control-Allow-Origin: *');

$postID = isset($_GET["postID"]) ? $_GET["postID"] : "0";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
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
                    post_info.post_id=? AND
                    post_info.post_id=post.id AND
                    post_info.author_id=author.id AND
                    post_info.plc_pvt_dft=1
                LIMIT 0,1";
$sql_get_tag = "SELECT
                    tag.id,
                    tag.name
                FROM post_tag, tag
                WHERE
                    post_tag.post_id=? AND
                    tag.id=post_tag.tag_id";

if ($stmt = $conn->prepare($sql_get_info)) {
    $stmt->bind_param("i", $postID);
    $stmt->execute();
    $stmt->bind_result($id, $time, $title, $content, $author);
    $result = [];
    while ($stmt->fetch()) {
        $result = [
            "id" => $id,
            "time" => $time,
            "title" => $title,
            "content" => $content,
            "author" => $author,
        ];
    }
    if ($stmt->num_rows === 0) {
        $stmt->close();
        $conn->close();
        die(json_encode([
            "errCode" => 8,
            "errMsg" => "Error: No result.",
        ], JSON_UNESCAPED_UNICODE));
    }
    $stmt->close();

    if ($stmt = $conn->prepare($sql_get_tag)) {
        $stmt->bind_param("i", $postID);
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
        $result["tags"] = $tags;
    }

} else {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

$conn->close();

echo json_encode($result, JSON_UNESCAPED_UNICODE);
