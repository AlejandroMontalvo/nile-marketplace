<?php 
INCLUDE("./database_interactions/account/security.php");
    security_logout();
    header("Location: login.php");
    exit;
?>