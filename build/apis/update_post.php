<?php
require_once './consts/dbConst.php';
require_once './verify_token.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Request-Method: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json; charset=utf-8');

$_POST = json_decode(file_get_contents("php://input"), true);

$authorID = verify_token($_POST["decoratedToken"])["activeUserID"];
$cateList = [1, 2, 3];

switch ($_POST["type"]) {
    case "post":
        $type = 1;
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
if (!isset($_POST["categoryID"]) || $_POST["content"] === "" || !in_array($_POST["categoryID"], $cateList)) {
    die(json_encode([
        "errCode" => 12,
        "errMsg" => "Error: Undefined category.",
    ], JSON_UNESCAPED_UNICODE));
}

$title = $_POST["title"];
$content = $_POST["content"];
$categoryID = $_POST["categoryID"];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

$sql_add_post = "INSERT INTO post (
                    time,
                    title,
                    content
                ) VALUE (
                    FROM_UNIXTIME(?),
                    ?,
                    ?
                )";
$sql_add_info = "INSERT INTO post_info (
                    post_id,
                    author_id,
                    category_id,
                    plc_pvt_dft
                ) VALUE (
                    ?,
                    ?,
                    ?,
                    ?
                )";
$sql_get_all_tag = "SELECT id, name FROM tag ORDER BY name";
$sql_add_new_tag = "INSERT INTO tag (name) VALUE (?)";
$sql_add_tag_info = "INSERT INTO post_tag (post_id, tag_id) VALUE (?, ?)";

if ($stmt = $conn->prepare($sql_add_post)) {
    $time = $_SERVER["REQUEST_TIME"];
    $stmt->bind_param("iss", $_SERVER["REQUEST_TIME"], $title, $content);
    $stmt->execute();
    $postID = $stmt->insert_id;
    $stmt->close();
} else {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

if ($stmt = $conn->prepare($sql_add_info)) {
    $stmt->bind_param("iiii", $postID, $authorID, $categoryID, $type);
    $stmt->execute();
    $stmt->close();
} else {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

if ($stmt = $conn->prepare($sql_add_new_tag)) {
    for ($i = 0; $i < count($_POST["tags"]); $i++) {
        if ($_POST["tags"][$i]["id"] <= 0) {
            $stmt->bind_param("s", $_POST["tags"][$i]["name"]);
            $stmt->execute();
            $_POST["tags"][$i]["id"] = $stmt->insert_id;
        }
    }
    $stmt->close();
} else {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

if ($stmt = $conn->prepare($sql_add_tag_info)) {
    for ($i = 0; $i < count($_POST["tags"]); $i++) {
        $stmt->bind_param("ii", $postID, $_POST["tags"][$i]["id"]);
        $stmt->execute();
    }
    $stmt->close();
} else {
    die(json_encode([
        "errCode" => 1,
        "errMsg" => "Error: " . $conn->connect_error,
    ], JSON_UNESCAPED_UNICODE));
}

$conn->close();

echo json_encode(["status" => "OK"], JSON_UNESCAPED_UNICODE);
