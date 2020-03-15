<?php
require_once './consts/dbConst.php';
require_once './verify_token.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Request-Method: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json; charset=utf-8');

$_POST = json_decode(file_get_contents("php://input"), true);

$authorID = verify_token($_POST["decoratedToken"])["activeUserID"];
$postID = isset($_POST["postID"]) ? $_POST["postID"] : 0;

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
                    post_info.category_id,
                    post.title,
                    post.content,
                    author.name AS author
                FROM post_info, post, author
                WHERE
                    post_info.post_id=? AND
                    post_info.author_id=? AND
                    post_info.post_id=post.id
                LIMIT 0,1";
$sql_get_tag = "SELECT
                    tag.id,
                    tag.name
                FROM post_tag, tag
                WHERE
                    post_tag.post_id=? AND
                    tag.id=post_tag.tag_id";

if ($stmt = $conn->prepare($sql_get_info)) {
    $stmt->bind_param("ii", $postID, $authorID);
    $stmt->execute();
    $stmt->bind_result($id, $time, $categoryID, $title, $content, $author);
    $result = [];
    while ($stmt->fetch()) {
        $result = [
            "id" => $id,
            "time" => $time,
            "category" => $categoryID,
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

} else {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

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

$conn->close();

echo json_encode($result, JSON_UNESCAPED_UNICODE);
