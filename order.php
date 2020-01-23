<?php

 header("Content-Type: application/json; charset=UTF-8");

 $ob = json_decode($_GET["x"], false);

 /* Attempt MySQL server connection. Assuming you are running MySQL
 server with default setting (user 'root' with no password) */
 $link = mysqli_connect("localhost", "root", "", "farmer");
 
 // Check connection
 if($link === false){

    die("ERROR: Could not connect. " . mysqli_connect_error());

 }

 //$ob->pImage=basename($ob->pImage);

 class Jsn
 {
    public $result='result';
 }

 $j = new Jsn();

 $output = array();

 $outpt = array();

 $output = array($j->result=> 'Saved successfully');

 $outpt = array($j->result=> 'Failed to save');
 
 // Attempt insert query execution

 $sql = "INSERT INTO orders 
 (
    pid,
    cEmail       
 )
 VALUES
 (
    '$ob->pid', 
    '$ob->cEmail'
 )";

 if(mysqli_query($link, $sql)){

   echo 'thankYou('.json_encode($output).')' ;

 } else{

    echo json_encode($outpt); //"ERROR: Could not able to execute $sql. " . mysqli_error($link);  
 }
 
 // Close connection
 mysqli_close($link);

?> 