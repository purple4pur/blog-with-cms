<?php
require_once './consts/dbConst.php';

header('Access-Control-Allow-Origin: *');

$postID = isset($_GET["postID"]) ? $_GET["postID"] : 0;

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

$sql_get_comment = "SELECT
                        comment.id,
                        user.name,
                        comment.time,
                        comment.content
                    FROM comment, user
                    WHERE
                        comment.post_id=? AND
                        user.union_id=comment.user_id
                    ORDER BY comment.time DESC";

if ($stmt = $conn->prepare($sql_get_comment)) {
    $stmt->bind_param("i", $postID);
    $stmt->execute();
    $stmt->bind_result($id, $name, $time, $content);
    $comments = [];
    while ($stmt->fetch()) {
        $comment = [
            "id" => $id,
            "name" => $name,
            "time" => $time,
            "content" => $content,
        ];
        array_push($comments, $comment);
    }
    if ($comments === []) {
        die(json_encode([
            "no_comment" => true,
        ], JSON_UNESCAPED_UNICODE));
    }
    $stmt->close();

} else {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

$conn->close();

echo json_encode($comments, JSON_UNESCAPED_UNICODE);
