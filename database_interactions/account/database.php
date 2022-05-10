<?php
    // Global connection
    $connection = null;

    function database_connect() {
        // Use the global connection
        global $connection;

        // Server
        $server = "localhost";
        // Username
        $username = "root";
        // If using XAMPP, 
        //  the password is an empty string.
        $password = "";
        // Database
        $database = "marketplace_database";

        if($connection == null) {
            $connection = mysqli_connect($server, $username, $password, $database);
        }
    }

    function database_addUser($username, $password) {
        // Use the global connection
        global $connection;

        if($connection != null) {
            // Overwrite the existing password value as a hash
            $password = password_hash($password, PASSWORD_DEFAULT);
            // Insert username and hashed password
            mysqli_query($connection, "INSERT INTO accounts (username, password) VALUES ('{$username}', '{$password}');");
        }
    }

    function database_deleteUser($username, $password) {
        // Use the global connection
        global $connection;

        if (database_verifyUser($username, $password)) {
            if($connection != null) {
                mysqli_query($connection, "DELETE FROM accounts WHERE username = '{$username}';");
            }
        }
    }

    function database_updatePassword($username, $password, $newPassword) {
        // Use the global connection
        global $connection;

        if (database_verifyUser($username, $password)) {
            if($connection != null) {
                $newPassword = password_hash($newPassword, PASSWORD_DEFAULT);
                mysqli_query($connection, "UPDATE accounts SET password = '{$newPassword}' WHERE username = '$username';");
            }
        }
    }

    function database_verifyUser($username, $password) {
        // Use the global connection
        global $connection;

        // Create a default value
        $status = false;

        if($connection != null) {
            // Use WHERE expressions to look for username
            $results = mysqli_query($connection, "SELECT password FROM accounts WHERE username = '{$username}';");
            
            // mysqli_fetch_assoc() returns either null or row data
            $row = mysqli_fetch_assoc($results);
            
            // If $row is not null, it found row data.
            if($row != null) {
                // Verify password against saved hash
                if(password_verify($password, $row["password"])) {
                    $status = true;
                }
            }
        }

        return $status;
    }

    function database_close() {
        // user global connection
        global $connection;

        if($connection != null) {
            mysqli_close($connection);
        }
    }
?>