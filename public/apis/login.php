<?php
require_once './consts/dbConst.php';
require_once './consts/privateKey.php';
require_once './vendor/autoload.php';

use \Firebase\JWT\JWT;

// header('Access-Control-Allow-Origin: *');
header('Access-Control-Request-Method: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/x-www-form-urlencoded;');

$_POST = json_decode(file_get_contents("php://input"), true);

if (!isset($_POST["username"])) {
    die("! Error: No username");
}
if (!isset($_POST["password"])) {
    die("! Error: No password");
}

$name = $_POST["username"];
$passwd = $_POST["password"];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql_get_admin_pre = "SELECT `password` FROM `admin` WHERE `username`=";
$sql_get_admin_post = "";

$result_get_admin = $conn->query($sql_get_admin_pre . '"' . $name . '"' . $sql_get_admin_post);

$savedPwd = $result_get_admin->fetch_assoc()["password"];

$conn->close();

if (!isset($savedPwd)) {
    die("! Error: Username not exist.");
}
if (!password_verify($passwd, $savedPwd)) {
    die("! Error: Wrong password.");
}

$payload = [
    "iss" => "https://purple4pur.com",
    "iat" => $_SERVER["REQUEST_TIME"],
    "exp" => $_SERVER["REQUEST_TIME"] + 30,
    "username" => $username,
];

$token = JWT::encode($payload, $privateKey);
echo $token;
