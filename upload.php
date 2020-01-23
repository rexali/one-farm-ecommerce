<?php

class Jsn
{
   public $result='result';
}

$j = new Jsn();

$uploadSuccess = array($j->result=> 'File is okay');

$uploadFailure = array($j->result=> 'Sorry, failed to upload');

$uploadType = array($j->result=> 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.');

$uploadSize = array($j->result=> 'Sorry, your file is too large.');

$uploadFile = array($j->result=> 'Sorry, file already exists.');

$uploadImage = array($j->result=> 'File is an image - " . $check["mime"] . ".');

$uploadImageErr = array($j->result=> 'File is not an image.');

$uploadOkayErr = array($j->result=> 'Sorry, your file was not uploaded.');


$target_dir = "uploads/";

$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

$uploadOk = 1;

$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_FILES["fileToUpload"]["tmp_name"])) {

    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);

    if($check !== false) {
        $uploadImage = array($j->result=> 'File is an image - "' . $check["mime"] .' ".');
        //echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
        //echo json_encode($uploadImage);  
    } else {
        //echo "File is not an image."; 
        $uploadOk = 0;
        echo json_encode($uploadImageErr);
        exit();
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    // echo "Sorry, file already exists.";
    $uploadOk = 0;
    echo json_encode($uploadFile);
    exit();
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    // echo "Sorry, your file is too large.";
    $uploadOk = 0;
    echo json_encode($uploadSize);
    exit();
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
    // echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
    echo json_encode($uploadType);
    exit();
   
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    // echo "Sorry, your file was not uploaded.";
    echo json_encode($uploadOkayErr);
    exit();
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        // echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
        echo json_encode($uploadSuccess);
        exit();
    } else {
        // echo "Sorry, there was an error uploading your file.";
        echo json_encode($uploadFailure);
        exit();
    }
}
?>