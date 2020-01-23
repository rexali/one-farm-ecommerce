<?php
 header("Content-Type: application/json; charset=UTF-8");

 $obj = json_decode($_POST["x"], false);

 /* Attempt MySQL server connection. Assuming you are running MySQL
 server with default setting (user 'root' with no password) */
 $link = mysqli_connect("localhost", "root", "", "ebizebiz");
 
 // Check connection
 if($link === false){
    
    die("ERROR: Could not connect. " . mysqli_connect_error());
 }

 class Jsn
 {
    public $success='';
    
    public $failure=''; 
 }

 $j = new Jsn();

 $j->success='success';

 $j->failure='failure';

 $output = array($j->success=>'Saved');

 $outpt = array($j->failure=>'failure');
 

 $sql = "UPDATE report SET
    pName ='$ob->pName', 
    pPrice='$ob->pPrice', 
    pUnit='$ob->pUnit',
    pImage='$ob->pImage', 
    pCategory='$ob->pCategory', 
    pSubCategory='$ob->pSubCategory',
    pCategoryDescription='$ob->pCategoryDescription', 
    pDescription='$ob->pDescription', 
    pNumberOfItems='$ob->pNumberOfItems',
    pDetail='$ob->pDetail', 
    pSellerName='$ob->pSellerName', 
    pSellerPhone='$ob->pSellerPhone',
    pSellerAddress='$ob->psellerAddress', 
    pSellerEmail='$ob->psellerEmail' 
 WHERE id ='$obj->id'";

 if(mysqli_query($link, $sql)){

    echo json_encode($output); //'[{"success":"saved"}]';

 } else{

    echo json_encode($outpt); //'[{"result":"not saved"}]'; //"ERROR: Could not able to execute $sql. " . mysqli_error($link);
 }
 
 // Close connection
 mysqli_close($link);
 
?>