<?php
 header("Content-Type: application/json; charset=UTF-8");

 $obj = json_decode($_POST["x"], false);

 /* Attempt MySQL server connection. Assuming you are running MySQL
 server with default setting (user 'root' with no password) */
 $link = mysqli_connect("localhost", "root", "", "farmer");
 
 // Check connection
 if($link === false){

    die("ERROR: Could not connect. " . mysqli_connect_error());
 }
 
 $result = $link->query("SELECT * FROM $obj->table WHERE pCategory = 'Farm Equipments' LIMIT $obj->limit");  //''LIMIT''.$obj->limit.''WHERE pCategory ='farmService'");

 $output = array();

 $output = $result->fetch_all(MYSQLI_ASSOC);

 $json =json_encode($output);

 echo $json;

//  $result = $link->query("INSERT INTO products (pName,pPrice,pUnit,pImage,pCategory,pSubCategory,pSummary,pDetail, pQuantity,sName,sPhone,sAddress,sEmail) VALUES('Ali',20,4,'','cereal','rice','good rice','it is a good product',4,'Bello','080','Naibawa','al@gm.com')");

//  echo "success";

?>