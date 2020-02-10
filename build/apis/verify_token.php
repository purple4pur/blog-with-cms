<?php
require_once './vendor/autoload.php';
require_once './consts/privateKey.php';

use \Firebase\JWT\JWT;

function verify_token($decoratedToken)
{
    global $privateKey;
    $token = explode(" ", $decoratedToken)[1];
    try {
        $payload = (array) JWT::decode($token, $privateKey, array('HS256'));
    } catch (Exception $e) {
        die(json_encode([
            "errCode" => 6,
            "errMsg" => "Error: Unvalid token.",
        ], JSON_UNESCAPED_UNICODE));
    }
    echo json_encode([
        "activeUser" => $payload["name"],
        "activeUserID" => $payload["id"],
    ], JSON_UNESCAPED_UNICODE);
}
