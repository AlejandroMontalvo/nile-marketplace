# ![Alt Text](./imgs/NileMarketplace.png)

Nile Marketplace is my first real attempt at creating a semi-functional market website. It's currently a work in progress, so it's missing some features and will more than likely change in terms of design over time.

# Getting Started

Before anything, you'll want to have the program XAAMP installed. If you don't already have it installed, you can download it from [here](https://www.apachefriends.org/download.html).

# Using XAAMP
Once you've gotten XAAMP on your system, you'll want to go wherever you installed XAAMP and access the `htdocs` folder. On an unchanged installation, this path is typically `C:\xampp\htdocs`.

Remove the example files found within this folder, either by putting it into its own `example` sub-folder or by simply deleting everyting.

You should then clone everything from this repository into the htdocs folder, within its own subfolder of named `nile-marketplace`. If done correctly, the location of the cloned files should look like `C:\xampp\htdocs\nile-marketplace`.

# Implementing the Database

Currently, the only database I've created is the `account_database.sql` which features a single account. Later on I do want to implement an `listing` database which features all of the markets items, but for now you'll only need to interact with the `account_database.sql` file.

If you haven't already, open XAAMP and 
