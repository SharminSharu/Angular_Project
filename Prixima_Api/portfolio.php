<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers:*");

$con = new mysqli('localhost', 'root', '', 'prixima');
$d = $con->query('select * from portfolio order by id desc');
$data = $d->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);