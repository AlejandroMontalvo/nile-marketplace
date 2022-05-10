<?php
  INCLUDE("./database_interactions/account/security.php");
  INCLUDE("./database_interactions/marketplace/listings.php");
    if (!security_loggedIn()) {
        header("Location: login.php");
        exit;
    }
?>
<html>
    <head>
        <link rel="stylesheet" href="./styles.css">
        <script type="text/javascript" src="./script.js"></script>
        <title>Nile Marketplace</title>
    </head>
    <body>
        <header>
            <nav>
                <div id="topNav">
                    <img id="navLogo" src="./imgs/logo.svg" alt="Site Logo"/>
                    <div id="navCenter">
                        <div id="navSearch">
                            <input type="search" id="searchInput" name="searchInput" placeholder="Search...">
                            <input id="searchIcon" type="image" src="./imgs/search-line.svg" alt="Submit">
                        </div>
                    </div>
                    <div id="navTools">
                        <button id="navProfile"><img src="./imgs/profile.svg" alt="Profile"/></button>
                        <div id="profileDropdown">
                            <a href="#example"><img class="dropdownIcon" src="./imgs/account-details.svg" alt="account-details"/>Account Information</a>
                            <a href="#example"><img class="dropdownIcon" src="./imgs/package-variant-closed.svg" alt="account-details"/>Orders & Returns</a>
                            <a href="./logout.php"><img class="dropdownIcon" src="./imgs/logout.svg" alt="account-details"/>Logout</a>
                        </div>
                        <button id="navCart" href="index.php"><img src="./imgs/cart.svg" alt="Cart"/></button>
                    </div>
                </div>
                <div id="sideNav">
                    <div class="sideNavTitle"><strong>Categories</strong></div>
                    <a class="sideNavCategory" href="index.php">Category 1</a>
                    <a class="sideNavSubCategory" href="index.php">├ Sub-Category 1</a>
                    <a class="sideNavSubCategory" href="index.php">├ Sub-Category 2</a>
                    <a class="sideNavSubCategory" href="index.php">├ Sub-Category 3</a>
                    <a class="sideNavSubCategory" href="index.php">├ Sub-Category 4</a>
                    <a class="sideNavSubCategory" href="index.php">└ Sub-Category 5</a>
                    <a class="sideNavCategory" href="index.php">Category 2</a>
                    <a class="sideNavCategory" href="index.php">Category 3</a>
                    <a class="sideNavCategory" href="index.php">Category 4</a>
                    <a class="sideNavCategory" href="index.php">Category 5</a>
                    <a class="sideNavCategory" href="index.php">Category 6</a>
                </div>
                <div id="storeFront">
                    <a class="listing" href="index.php">
                        <img src="./imgs/apple.jpg" alt="Logout"/>
                        <div style="height: 15%; overflow: hidden; margin-top: 0.5rem;"><p class="listingTitle">asdasd.asdaasdasd.</p></div>
                        <p class="listingPrice"><strong>$5.00</strong></p>
                    </a>
                </div>
            </nav>
        </header>
    </body>
</html>