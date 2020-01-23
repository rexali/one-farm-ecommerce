<?php
// Include config file
require_once 'config.php';
 $cEmail_err=$cPassword_err="";

// Validate cEmail
    if(empty($ob->cEmail)){
        $cEmail_err = "Please enter a cEmail.";
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
                } else{
                    $cEmail = trim($ob->cEmail);
                }
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
        }
         
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
    // Validate cPassword
    if(empty($ob->cPassword)){
        $cPassword_err = "Please enter a cPassword.";     
    } elseif(strlen(trim($ob->cPassword)) < 6){
        $cPassword_err = "cPassword must have atleast 6 characters.";
    } else{
        $cPassword = trim($ob->cPassword);
    }
    
    // Validate confirm cPassword
    if(empty($ob->confirm_cPassword)){
        $confirm_cPassword_err = 'Please confirm cPassword.';     
    } else{
        $confirm_cPassword = trim($ob->confirm_cPassword);
        if($cPassword != $confirm_cPassword){
            $confirm_cPassword_err = 'cPassword did not match.';
        }
    }
    
    // Check input errors before inserting in database
    if(empty($cEmail_err) && empty($cPassword_err) && empty($confirm_cPassword_err)){
        
        // Prepare an insert statement
        $sql = "INSERT INTO users (cEmail, cPassword) VALUES (?, ?)";
         
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "ss", $param_cEmail, $param_cPassword);
            
            // Set parameters
            $param_cEmail = $cEmail;
            $param_cPassword = cPassword_hash($cPassword, cPASSWORD_DEFAULT); // Creates a cPassword hash
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Redirect to login page
                header("location: index.html");
            } else{
                echo "Something went wrong. Please try again later.";
            }
        }
         
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
    // Close connection
    mysqli_close($link);

?>
 
