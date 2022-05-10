<?php
  INCLUDE("./database_interactions/account/security.php");
    if (security_loggedIn()) {
        header("Location: index.php");
        exit;
    }
?>
<html>
<head>
      <link rel="stylesheet" href="styles.css">
      <title>Login to Marketplace</title>
</head>
    <body>
        <div class='accountFormContainer'>
            <h3>Login to Marketplace</h3>
            <img id="navLogo" src="./imgs/logo.svg" alt="Site Logo"/>
            <form action="login.php" method="POST">
                <label for="username">Username</label><br>
                <input type="text" name="username"><br><br>
                <label for="password">Password</label><br>
                <input type="password" name="password"><br><br>
                <input type="submit" name="submit" value="Submit">
            </form>
            <a href="./signup.php">Sign Up</a>
        </div>
        <?php
            if (!empty($_POST['username']) && !empty($_POST['password'])) {
                security_login();
                header("Location: login.php");
                exit;
            }
        ?>
    </body>
</html>