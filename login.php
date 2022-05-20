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
            <img style="width: 20rem; margin-bottom: 0.5rem;" src='./imgs/NileMarketplaceHeader.svg' alt='Logo Header'/>
            <form action="login.php" method="POST">
                <label for="username">Username</label><br>
                <input type="text" name="username"><br><br>
                <label for="password">Password</label><a href="#example" style="float:right" class="underlineLink">Forgot your Password?</a><br>
                <input type="password" name="password"><br><br>
                <input class="submitButton" type="submit" name="submit" value="Login">
            </form>
            <a href="./signup.php" class="underlineLink">Sign Up</a>
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