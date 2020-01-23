<?php
header("Content-Type: application/json; charset=UTF-8");

$ob = json_decode($_POST["x"], false);
// Include config file
require_once 'config.php';

$cEmail_err=$cPassword_err="";


class Jsn
{
  public $result='result';
}

$j = new Jsn();

$loginSuccess = array($j->result=> 'Login successful');
$loginFailure = array($j->result=> 'Registration failed');
$loginEmailErr = array($j->result=> 'Please enter email.');
$loginEmailError = array($j->result=> 'No account found with that Email.');
$loginPasswordErr = array($j->result=> 'Please enter a password.');
$loginPasswordError = array($j->result=> 'Password must have atleast 6 characters.');
$loginConfirmPasswordErr = array($j->result=> 'Please confirm password.');
$loginConfirmPasswordError = array($j->result=> 'Password did not match.');
$loginError = array($j->result=> 'Oops! Something went wrong. Please try again later.');
 
// Processing json data when data is sent
  
    // Check if cEmail is empty
    if(empty($ob->cEmail)){
        $cEmail_err = 'Please enter Email.';
        echo json_encode($loginEmailErr);
        exit();
    } else{
        $cEmail = trim($ob->cEmail);
    }
    
    // Check if cPassword is empty
    if(empty($ob->cPassword)){
        $cPassword_err = 'Please enter your password.';
        echo json_encode($loginPasswordErr);
        exit();
    } else{
        $cPassword = trim($ob->cPassword);
    }
    
    // Validate credentials
    if(empty($cEmail_err) && empty($cPassword_err)){
        // Prepare a select statement
        $sql = "SELECT cEmail, cPassword FROM customers WHERE cEmail = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_cEmail);
            
            // Set parameters
            $param_cEmail = $cEmail;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Store result
                mysqli_stmt_store_result($stmt);
                
                // Check if cEmail exists, if yes then verify cPassword
                if(mysqli_stmt_num_rows($stmt) == 1){                    
                    // Bind result variables
                    mysqli_stmt_bind_result($stmt, $cEmail, $hashed_cPassword);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($cPassword, $hashed_cPassword)){
                            /* cPassword is correct, so start a new session and
                            save the cEmail to the session */
                            //session_start();
                            //$_SESSION['cEmail'] = $cEmail;      
                            //header("location: index.html");
                            echo json_encode($loginSuccess);
                        } else{
                            // Display an error message if cPassword is not valid
                            $cPassword_err = 'The password you entered was not valid.';
                            echo json_encode($loginPasswordErr);
                            exit();
                        }
                    }
                } else{
                    // Display an error message if cEmail doesn't exist
                    $cEmail_err = 'No account found with that cEmail.';
                    echo json_encode($loginEmailError);
                    exit();
                }
            } else{
               // echo "Oops! Something went wrong. Please try again later.";
                echo json_encode($loginError);
                exit();
            }
        }
        
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
    // Close connection
    mysqli_close($link);
//}
?>
