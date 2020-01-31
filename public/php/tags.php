<?php
require_once './dbConst.php';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql_get_post_id = "SELECT `post_id` FROM `post_tag` WHERE `tag_id` = ";
$sql_get_post_info = "SELECT `category_id`, `author_id` FROM `post_info` WHERE `post_id` = ";
$sql_get_post = "SELECT * FROM `post` WHERE `id` = ";
$sql_get_author = "SELECT `name` FROM `author` WHERE `id` = ";
$sql_get_tag_id = "SELECT `tag_id` FROM `post_tag` WHERE `post_id` = ";
$sql_get_tag = "SELECT * FROM `tag` WHERE `id` = ";
$sql_get_all_tags = "SELECT * FROM `tag`";

if (isset($_GET["tagID"])) {
    $tagID = $_GET["tagID"];

    $result_get_post_id = $conn->query($sql_get_post_id . $tagID);

    $arr = array();
    while ($row = $result_get_post_id->fetch_assoc()) {
        $result_get_post_info = $conn->query($sql_get_post_info . $row["post_id"]);
        $result_get_post = $conn->query($sql_get_post . $row["post_id"]);
        $result_get_author = $conn->query($sql_get_author . $result_get_post_info->fetch_assoc()["author_id"]);

        $result = $result_get_post->fetch_assoc();
        $result["author"] = $result_get_author->fetch_assoc()["name"];

        $result_get_tag_id = $conn->query($sql_get_tag_id . $row["post_id"]);
        $tags = [];
        while ($row2 = $result_get_tag_id->fetch_assoc()) {
            $result_get_tag = $conn->query($sql_get_tag . $row2["tag_id"]);
            $tag = $result_get_tag->fetch_assoc();
            array_push($tags, $tag);
        }
        $result["tags"] = $tags;

        array_push($arr, $result);
    }

    echo json_encode($arr, JSON_UNESCAPED_UNICODE);

} else {
    $result_get_all_tags = $conn->query($sql_get_all_tags);

    $arr = array();
    while ($row = $result_get_all_tags->fetch_assoc()) {
        array_push($arr, $row);
    }

    echo json_encode($arr, JSON_UNESCAPED_UNICODE);
}

$conn->close();
