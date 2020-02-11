<?php
require_once './consts/dbConst.php';
require_once './verify_token.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Request-Method: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json; charset=utf-8');

$_POST = json_decode(file_get_contents("php://input"), true);

$authorID = verify_token($_POST["decoratedToken"])["activeUserID"];

switch ($_POST["type"]) {
    case "post":
        if (!isset($_POST["title"]) || $_POST["title"] === "") {
            die(json_encode([
                "errCode" => 9,
                "errMsg" => "Error: No title.",
            ], JSON_UNESCAPED_UNICODE));
        }
        if (!isset($_POST["content"]) || $_POST["content"] === "") {
            die(json_encode([
                "errCode" => 10,
                "errMsg" => "Error: No content.",
            ], JSON_UNESCAPED_UNICODE));
        }

        $title = $_POST["title"];
        $content = $_POST["content"];
        $categoryID = 2;

        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die(json_encode([
                "errCode" => 1,
                "errMsg" => "Error: " . $conn->connect_error,
            ], JSON_UNESCAPED_UNICODE));
        }

        $sql_add_post_pre = "INSERT INTO post (time, title, content) VALUE (FROM_UNIXTIME(" . time() . "), ";
        $sql_add_post_post = ")";
        $sql_add_info_pre = "INSERT INTO post_info (post_id, author_id, category_id) VALUE (";
        $sql_add_info_post = ")";

        $conn->query($sql_add_post_pre . '"' . $title . '", "' . $content . '"' . $sql_add_post_post);
        $id = $conn->insert_id;
        $conn->query($sql_add_info_pre . '"' . $id . '", "' . $authorID . '", "' . $categoryID . '"' . $sql_add_info_post);

        $conn->close();

        echo json_encode(["status" => "OK"], JSON_UNESCAPED_UNICODE);
        break;

    case "draft":
        if (!isset($_POST["title"]) || $_POST["title"] === "") {
            die(json_encode([
                "errCode" => 9,
                "errMsg" => "Error: No title.",
            ], JSON_UNESCAPED_UNICODE));
        }

        $title = $_POST["title"];
        $content = isset($_POST["content"]) || "";
        $categoryID = 2;

        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die(json_encode([
                "errCode" => 1,
                "errMsg" => "Error: " . $conn->connect_error,
            ], JSON_UNESCAPED_UNICODE));
        }

        $sql_add_post_pre = "INSERT INTO post (time, title, content) VALUE (FROM_UNIXTIME(" . time() . "), ";
        $sql_add_post_post = ")";
        $sql_add_info_pre = "INSERT INTO post_info (post_id, author_id, category_id, plc_pvt_dft) VALUE (";
        $sql_add_info_post = ", 3)";

        $conn->query($sql_add_post_pre . '"' . $title . '", "' . $content . '"' . $sql_add_post_post);
        $id = $conn->insert_id;
        $conn->query($sql_add_info_pre . '"' . $id . '", "' . $authorID . '", "' . $categoryID . '"' . $sql_add_info_post);

        $conn->close();

        echo json_encode(["status" => "OK"], JSON_UNESCAPED_UNICODE);
        break;

    default:
        echo json_encode([
            "errCode" => 11,
            "errMsg" => "Error: Wrong type.",
        ], JSON_UNESCAPED_UNICODE);
}
