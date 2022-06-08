<?php 
    function populate_storefront() {
        $listings_amount = 1;
        for ($i=0; $i<$listings_amount; $i+=1) {
            echo("<a class='listing' href='index.php'>");
            echo("<img src='./imgs/apple.jpg' alt='Logout'/>");
            echo("<div class='listingTitleSpace'><p class='listingTitle'>Fresh Apple</p></div>");
            echo("<p class='listingPrice'><strong>$5.00</strong></p>");
            echo("</a>");
        }
    }
?>