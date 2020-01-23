<?php

 header("Content-Type: application/json; charset=UTF-8");

 $ob = json_decode($_POST["x"], false);

 /* Attempt MySQL server connection. Assuming you are running MySQL
 server with default setting (user 'root' with no password) */
 $link = mysqli_connect("localhost", "root", "", "farmer");
 
 // Check connection
 if($link === false){

    die("ERROR: Could not connect. " . mysqli_connect_error());

 }

 $ob->pImage=basename($ob->pImage);

 class Jsn
 {
    public $result='result';
 }

 $j = new Jsn();

 $output = array();

 $outpt = array();

 $output = array($j->result=> 'Update successful');

 $outpt = array($j->result=> 'Update fail');
 
 // Attempt insert query execution

 $sql = "INSERT INTO products 
 (
    pName,
    pPrice,    
    pImage,
    pCategory,
    pSubCategory,
    pSummary,
    pDetail,
    pQuantity,
    sName,
    sPhone,
    sAddress,
    sEmail       
 )
 VALUES
 (
    '$ob->pName', 
    '$ob->pPrice', 
    '$ob->pImage', 
    '$ob->pCategory', 
    '$ob->pSubCategory',
    '$ob->pSummary', 
    '$ob->pDetail', 
    '$ob->pQuantity', 
    '$ob->sName', 
    '$ob->sPhone',
    '$ob->sAddress', 
    '$ob->sEmail'
 )";

 if(mysqli_query($link, $sql)){

   echo json_encode($output);

 } else{

    echo json_encode($outpt); //"ERROR: Could not able to execute $sql. " . mysqli_error($link);  
 }
 
 // Close connection
 mysqli_close($link);

?> 