<?php
    $to = "contact@jerrywang.info"; 
    $from = $_REQUEST['email']; 
    $name = $_REQUEST['name']; 
    $message = $_REQUEST['message'];
    $headers = "From: $from"; 
    $subject = "Form submitted from $name"; 
    $send = mail($to, $subject, $message, $headers);
?>