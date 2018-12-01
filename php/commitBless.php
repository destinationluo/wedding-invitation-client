<?php
ini_set("error_reporting", E_ALL);
$pdo = new PDO("mysql:host=localhost;dbname=wedding", "root", "");
$pdo->query("SET NAMES utf8");

$name = $_GET['name'];
$name = $_GET['phone'];
$name = $_GET['num'];
$text = $_GET['text'];
$ip = $_SERVER['REMOTE_ADDR'];
if (empty($name) || empty($num)) {
    return false;
}

$result = array(
    "success" => false
);

if ($pdo->exec("INSERT INTO bless SET name = '$name', phone = '$phone', num = '$num', text = '$text',ip = '$ip', create_time = NOW() ")) {
    $result['success'] = true;
}

echo json_encode($result);