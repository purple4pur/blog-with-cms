<?php
require_once './consts/dbConst.php';

header('Access-Control-Allow-Origin: *');

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
                FROM post_info, post, author, post_tag
                WHERE
                    post_tag.tag_id=? AND
                    post_info.post_id=post_tag.post_id AND
                    post.id=post_tag.post_id AND
                    post_info.author_id=author.id AND
                    post_info.plc_pvt_dft=1
                ORDER BY post.time DESC";
$sql_get_tag = "SELECT
                    tag.id,
                    tag.name
                FROM post_tag, tag
                WHERE
                    post_tag.post_id=? AND
                    tag.id=post_tag.tag_id";
$sql_get_all_tag = "SELECT id, name FROM tag ORDER BY name";
$sql_check_valid_tag = "SELECT
                            post_tag.post_id
                        FROM
                            post_tag, post_info
                        WHERE
                            post_tag.tag_id=? AND
                            post_info.post_id=post_tag.post_id AND
                            post_info.plc_pvt_dft=1";

if (isset($_GET["tagID"])) {
    $tagID = $_GET["tagID"];

    if ($stmt = $conn->prepare($sql_get_info)) {
        $stmt->bind_param("i", $tagID);
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

} else {
    $result_get_all_tag = $conn->query($sql_get_all_tag);
    if ($result_get_all_tag->num_rows === 0) {
        die(json_encode([
            "errCode" => 8,
            "errMsg" => "Error: No result.",
        ], JSON_UNESCAPED_UNICODE));
    }

    $result = [];
    while ($row = $result_get_all_tag->fetch_assoc()) {
        if ($stmt = $conn->prepare($sql_check_valid_tag)) {
            $stmt->bind_param("i", $row["id"]);
            $stmt->execute();
            while ($stmt->fetch());
            if ($stmt->num_rows > 0) {
                array_push($result, $row);
            }
            $stmt->close();
        } else {
            die(json_encode([
                "errCode" => 1,
                "errMsg" => "Error: " . $conn->connect_error,
            ], JSON_UNESCAPED_UNICODE));
        }
    }
}

$conn->close();

echo json_encode($result, JSON_UNESCAPED_UNICODE);
