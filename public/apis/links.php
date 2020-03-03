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

$sql_get_link = "SELECT id, title, link FROM link";

$result = $conn->query($sql_get_link);

$ret = [];
while ($row = $result->fetch_assoc()) {
    array_push($ret, $row);
}

$conn->close();

echo json_encode($ret, JSON_UNESCAPED_UNICODE);
