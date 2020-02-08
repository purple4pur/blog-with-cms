<?php
require_once './consts/dbConst.php';

header('Access-Control-Allow-Origin: *');

$categoryID = isset($_GET["categoryID"]) ? $_GET["categoryID"] : "0";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

$sql_get_info_pre = "SELECT post_info.post_id AS id, post.time, post.title, post.content, author.name AS author FROM post_info, post, author WHERE post_info.category_id=";
$sql_get_info_post = " AND post_info.post_id=post.id AND post_info.author_id=author.id ORDER BY post.time DESC";
$sql_get_tag_pre = "SELECT tag.id, tag.name FROM post_tag, tag WHERE post_tag.post_id=";
$sql_get_tag_post = " AND tag.id=post_tag.tag_id";

$result_get_info = $conn->query($sql_get_info_pre . '"' . $categoryID . '"' . $sql_get_info_post);
if ($result_get_info->num_rows === 0) {
    die(json_encode([
        "errCode" => 8,
        "errMsg" => "Error: No result.",
    ], JSON_UNESCAPED_UNICODE));
}

$arr = [];
while ($row = $result_get_info->fetch_assoc()) {
    $result_get_tag = $conn->query($sql_get_tag_pre . '"' . $row["id"] . '"' . $sql_get_tag_post);
    $tags = [];
    while ($tag = $result_get_tag->fetch_assoc()) {
        array_push($tags, $tag);
    }

    $row["tags"] = $tags;
    array_push($arr, $row);
}

echo json_encode($arr, JSON_UNESCAPED_UNICODE);

$conn->close();
