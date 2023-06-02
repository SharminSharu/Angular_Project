<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$con = new mysqli('localhost', 'root', '', 'prixima');

$data = json_decode(file_get_contents('php://input'), true);

$con->query("insert into contact (first,last,email,msg) values ('" . $data['first'] . "','" . $data['last'] . "','" . $data['email'] . "','" . $data['msg'] . "')");

// echo json_encode(['status'=>true]);
echo json_encode($data);