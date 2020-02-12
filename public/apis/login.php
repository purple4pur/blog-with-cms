<?php
require_once './consts/dbConst.php';
require_once './vendor/autoload.php';
require_once './consts/privateKey.php';
require_once './verify_token.php';

use \Firebase\JWT\JWT;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Request-Method: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Expose-Headers: Authorization');

$_POST = json_decode(file_get_contents("php://input"), true);

if (isset($_POST["decoratedToken"])) {
    echo json_encode(verify_token($_POST["decoratedToken"]), JSON_UNESCAPED_UNICODE);

} else {
    if (!isset($_POST["username"]) || $_POST["username"] === "") {
        die(json_encode([
            "errCode" => 2,
            "errMsg" => "Error: No username.",
        ], JSON_UNESCAPED_UNICODE));
    }
    if (!isset($_POST["password"]) || $_POST["password"] === "") {
        die(json_encode([
            "errCode" => 3,
            "errMsg" => "Error: No password.",
        ], JSON_UNESCAPED_UNICODE));
    }

    $name = $_POST["username"];
    $passwd = $_POST["password"];

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die(json_encode([
            "errCode" => 1,
            "errMsg" => "Error: " . $conn->connect_error,
        ], JSON_UNESCAPED_UNICODE));
    }

    $sql_get_user_pre = "SELECT password,id,name FROM author WHERE username=";
    $sql_get_user_post = " LIMIT 0,1";

    $result_get_user = $conn->query($sql_get_user_pre . '"' . $name . '"' . $sql_get_user_post);

    $result_get_user = $result_get_user->fetch_assoc();
    $savedPwd = $result_get_user["password"];
    $name = $result_get_user["name"];
    $id = $result_get_user["id"];

    $conn->close();

    if (!isset($savedPwd)) {
        die(json_encode([
            "errCode" => 4,
            "errMsg" => "Error: Username not exist.",
        ], JSON_UNESCAPED_UNICODE));
    }
    if (!password_verify($passwd, $savedPwd)) {
        die(json_encode([
            "errCode" => 5,
            "errMsg" => "Error: Wrong password.",
        ], JSON_UNESCAPED_UNICODE));
    }

    $payload = [
        "iss" => "https://purple4pur.com",
        "iat" => $_SERVER["REQUEST_TIME"],
        "exp" => $_SERVER["REQUEST_TIME"] + 7200, // stay logged in for 2h
        "name" => $name,
        "id" => $id,
    ];

    $token = JWT::encode($payload, $privateKey);

    header('Authorization: Bearer ' . $token);
    echo "";
}
