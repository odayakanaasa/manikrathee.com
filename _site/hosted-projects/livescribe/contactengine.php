<?php

$EmailFrom = "Livescribe Echo Inquiry";
$EmailTo = "mcoviello13@comcast.net";
$Subject = "I am interested in buying a Livescribe Echo Pen";
$Name = Trim(stripslashes($_POST['Name'])); 
$Position = Trim(stripslashes($_POST['Position'])); 
$School = Trim(stripslashes($_POST['School'])); 
$Address = Trim(stripslashes($_POST['Address'])); 
$Phone = Trim(stripslashes($_POST['Phone'])); 
$Email = Trim(stripslashes($_POST['Email']));
$Time = Trim(stripslashes($_POST['Time Frame For Purchase'])); 
$Message = Trim(stripslashes($_POST['Message'])); 


// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Position: ";
$Body .= $Position;
$Body .= "\n";
$Body .= "School: ";
$Body .= $School;
$Body .= "\n";
$Body .= "Address: ";
$Body .= $Address;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $Phone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Time Frame For Purchase: ";
$Body .= $Time;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html\">";
}
?>