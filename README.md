# Nile Marketplace

Nile Marketplace is a basic marketplace implementation built with React Native. The app allows users to browse, favorite, and create listings.

[Live Demo](https://alejandromontalvo.github.io/nile-marketplace/)

## Components

### Home

The Home screen displays a collection of items on the home screen. It retrieves a collection of listings and displays them in a grid view. Each listing is displayed as a card with an image, title, price, and condition. Users can tap on a listing to view the details of that listing.

### CreateNewListing

The CreateNewListing screen is used to create a new listing. It includes a form with input fields for the title, description, price, condition, and an image. The form data is stored locally and can be submitted to create a new listing.

### ListingDetails

The ListingDetails screen displays the details of a single listing. It includes an image of the item, the title, description, price, and condition. Users can navigate back to the home screen to view other listings.

### Favorites
The Favorites screen displays a collection of favorited listings. It retrieves the user's favorite listings from AsyncStorage and filters the listings based on the favorited items. The favorited listings are displayed in a grid view, similar to the Home component. Users can tap on a listing to view its details.