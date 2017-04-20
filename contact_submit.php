<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$email_from = 'rdraves5@gmail.com';//<== update the email address
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user.\n".
    "Here is the message:\n $message".
    
$to = "rdraves5@gmail.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
mail('rdraves5@gmail.com','test','testing');
//done. redirect to thank-you page.
header('Location: index.html');
   
?> 