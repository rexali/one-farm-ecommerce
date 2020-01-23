<?php
 header("Content-Type: application/json; charset=UTF-8");

 $obj = json_decode($_POST["x"], false);

 /* Attempt MySQL server connection. Assuming you are running MySQL
 server with default setting (user 'root' with no password) */
 $link = mysqli_connect("localhost", "root", "", "farm");
 
 // Check connection
 if($link === false){

    die("ERROR: Could not connect. " . mysqli_connect_error());
 }
 $result = $link->query("SELECT * FROM ".$obj->table." LIMIT ".$obj->limit);

 $output = array();

 $output = $result->fetch_all(MYSQLI_ASSOC);

 echo json_encode($output);
?>