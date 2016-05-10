<?php
  // The message
  $message=$_POST['email'];
  // In case any of our lines are larger than 70 characters, we should use wordwrap()
  $message=wordwrap($message,70,"\r\n");
  // Send
  // matthieu.comperat@gmail.com for test
  mail('matthieu.comperat@gmail.com','Demande d\'informations Coach\'n Pulse',$message);
?>