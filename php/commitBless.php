<?php
ini_set("error_reporting", E_ALL);
$pdo = new PDO("mysql:host=localhost;dbname=wedding", "root", "");
$pdo->query("SET NAMES utf8");

$name = $_GET['name'];
$text = $_GET['text'];
$ip = $_SERVER['REMOTE_ADDR'];
if (empty($name) || empty($text)) {
    return false;
}

$result = array(
    "success" => false
);

if ($pdo->exec("INSERT INTO bless SET name = '$name', text = '$text',ip = '$ip', create_time = NOW() ")) {
    $result['success'] = true;
}

echo json_encode($result);