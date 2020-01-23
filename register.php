<?php
header("Content-Type: application/json; charset=UTF-8");

$ob = json_decode($_POST["x"], false);
// Include config file
require_once 'config.php';

 $cEmail_err=$cPassword_err=$confirm_cPassword_err="";


 class Jsn
{
   public $result='result';
}

$j = new Jsn();

$registerSuccess = array($j->result=> 'Registration successful');
$registerFailure = array($j->result=> 'Registration failed');
$registerEmailErr = array($j->result=> 'Please enter email.');
$registerEmailError = array($j->result=> 'This Email is already taken.');
$registerPasswordErr = array($j->result=> 'Please enter a password.');
$registerPasswordError = array($j->result=> 'Password must have atleast 6 characters.');
$registerConfirmPasswordErr = array($j->result=> 'Please confirm password.');
$registerConfirmPasswordError = array($j->result=> 'Password did not match.');
$registerError = array($j->result=> 'Oops! Something went wrong. Please try again later.');

// Validate cEmail
    if(empty($ob->cEmail)){
        $cEmail_err = "Please enter a cEmail.";
        echo json_encode($registerEmailErr);
        exit();
    } else{
        // Prepare a select statement
        $sql = "SELECT id FROM customers WHERE cEmail = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_cEmail);
            
            // Set parameters
            $param_cEmail = trim($ob->cEmail);
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                /* store result */
                mysqli_stmt_store_result($stmt);
                
                if(mysqli_stmt_num_rows($stmt) == 1){
                    $cEmail_err = "This cEmail is already taken.";
                    echo json_encode($registerEmailError);
                    exit();
                } else{
                    $cEmail = trim($ob->cEmail);
                }
            } else{
                //echo "Oops! Something went wrong. Please try again later.";
                echo json_encode($registerError);
            }
        }
         
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
    // Validate cPassword
    if(empty($ob->cPassword)){
        $cPassword_err = "Please enter a password.";
        echo json_encode($registerPasswordErr);
        exit();    
    } elseif(strlen(trim($ob->cPassword)) < 6){
        $cPassword_err = "Password must have atleast 6 characters.";
        echo json_encode($registerPasswordError);
        exit();
    } else{
        $cPassword = trim($ob->cPassword);
    }
    
    // Validate confirm cPassword
    if(empty($ob->confirm_cPassword)){
        $confirm_cPassword_err = 'Please confirm password.'; 
        echo json_encode($registerConfirmPasswordErr); 
        exit();   
    } else{
        $confirm_cPassword = trim($ob->confirm_cPassword);
        if($cPassword != $confirm_cPassword){
            $confirm_cPassword_err = 'Password did not match.';
            echo json_encode($registerConfirmPasswordError);
            exit();
        }
    }
    
    // Check input errors before inserting in database
    if(empty($cEmail_err) && empty($cPassword_err) && empty($confirm_cPassword_err)){
        
        // Prepare an insert statement
        $sql = "INSERT INTO customers (cEmail, cPassword) VALUES (?, ?)";
         
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "ss", $param_cEmail, $param_cPassword);
            
            // Set parameters
            $param_cEmail = $cEmail;
            $param_cPassword = password_hash($cPassword, PASSWORD_DEFAULT); // Creates a cPassword hash
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Redirect to login page
                // header("location: index.html");
                echo json_encode($registerSuccess);
                exit();
            } else{
                // echo "Something went wrong. Please try again later.";
                echo json_encode($registerError);
                exit();
            }
        }
         
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
    // Close connection
    mysqli_close($link);

?>
 
