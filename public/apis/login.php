<?php
require_once './consts/dbConst.php';
require_once './vendor/autoload.php';
require_once './consts/privateKey.php';

use \Firebase\JWT\JWT;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Request-Method: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/x-www-form-urlencoded;');
header('Access-Control-Expose-Headers: Authorization');

$_POST = json_decode(file_get_contents("php://input"), true);

if (isset($_POST["decoratedToken"])) {
    $token = explode(" ", $_POST["decoratedToken"])[1];
    try {
        $payload = (array) JWT::decode($token, $privateKey, array('HS256'));
    } catch (Exception $e) {
        die(json_encode([
            "errCode" => 6,
            "errMsg" => "Error: Unvalid token.",
        ], JSON_UNESCAPED_UNICODE));
    }
    echo json_encode(["activeUser" => $payload["username"]], JSON_UNESCAPED_UNICODE);

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

    $sql_get_admin_pre = "SELECT password FROM admin WHERE username=";
    $sql_get_admin_post = "";

    $result_get_admin = $conn->query($sql_get_admin_pre . '"' . $name . '"' . $sql_get_admin_post);

    $savedPwd = $result_get_admin->fetch_assoc()["password"];

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
        "exp" => $_SERVER["REQUEST_TIME"] + 3600, // stay logged in for 1h
        "username" => $name,
    ];

    $token = JWT::encode($payload, $privateKey);

    header('Authorization: Bearer ' . $token);
    echo "";
}
