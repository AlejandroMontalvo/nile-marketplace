<?php
include "./database_interactions/account/security.php";
include "./database_interactions/marketplace/listings.php";
if (!security_loggedIn()) {
    header("Location: login.php");
    exit();
}
?>
<html>
    <head>
        <link rel="stylesheet" href="./styles.css">
        <script type="text/javascript" src="./script.js"></script>
        <link rel="shortcut icon" type="image/jpg" href="./imgs/logo.svg"/>
        <title>Nile Marketplace</title>
    </head>
    <body>
        <nav>
            <header>
                <div id="topNav">
                    <img id="navLogo" src="./imgs/logo.svg" alt="Site Logo"/>
                    <div id="navCenter">
                        <div id="navSearch">
                            <input type="search" id="searchInput" name="searchInput" placeholder="Search...">
                            <input id="searchIcon" type="image" src="./imgs/search-line.svg" alt="Submit">
                        </div>
                    </div>
                    <div id="navTools">
                        <button id="navProfile"><img id="navIcon" src="./imgs/profile.svg" alt="Profile"/></button>
                        <div id="profileDropdown">
                            <a href="#example" class="dropdownOption"><img class="dropdownIcon" src="./imgs/account-details.svg" alt="account-information"/>Account Information</a>
                            <a href="#example" class="dropdownOption"><img class="dropdownIcon" src="./imgs/package.svg" alt="orders&returns"/>Orders & Returns</a>
                            <a href="#example" class="dropdownOption"><img class="dropdownIcon" src="./imgs/package-plus.svg" alt="orders&returns"/>Create New Listing</a>
                            <a href="./logout.php" class="dropdownOption"><img class="dropdownIcon" src="./imgs/logout.svg" alt="logout"/>Logout</a>
                        </div>
                        <button id="navCart" href="index.php"><img src="./imgs/cart.svg" alt="Cart"/></button>
                    </div>
                </div>
            </header>
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
        </nav>
        <div style="display: inline-flex; width: 100%; padding-right: 1rem;">
        <div id="storeFront">
            <?php populate_storefront(); ?>
        </div>
        <div style="float: right; width: 19rem; margin-top: 6.5rem; padding: 2rem 0.5rem 2rem 0.5rem;">
            <div style=" height: 15rem; border-radius: 0.5rem; border: 2px solid #1f1f1f; ">
                <div class="sideNavTitle">News</div><a href="index.php" class="sideNavCategory">This is an example of a news thing</a>
            </div>
        </div>
    </body>
</html>