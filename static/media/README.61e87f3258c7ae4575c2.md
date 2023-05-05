# Nile Marketplace

Nile Marketplace is a basic marketplace implementation built with React Native. The app allows users to browse and create listings.

[Live Demo](https://alejandromontalvo.github.io/nile-marketplace/)

## Components

### Home

The Home component displays a collection of items on the home screen. It retrieves a collection of listings and displays them in a grid view. Each listing is displayed as a card with an image, title, price, and condition. Users can tap on a listing to view the details of that listing.

### CreateNewListing

The CreateNewListing component is used to create a new listing. It includes a form with input fields for the title, description, price, condition, and an image. The form data is stored locally and can be submitted to create a new listing.

### ListingDetails

The ListingDetails component displays the details of a single listing. It includes an image of the item, the title, description, price, and condition. Users can navigate back to the home screen to view other listings.

## Inputs and States

### CreateNewListing

Inputs:

- Title input field.
- Description input field.
- Price input field.
- Condition input dropdown.
- Image picker for selecting an image to upload.

States:

- title: String representing the title of the listing.
- description: String representing the description of the listing.
- price: String representing the price of the listing.
- condition: String representing the condition of the listing.
- image: Object representing the image selected by the user.

### Home

Inputs:

- Listings array containing objects representing each listing to be displayed.

States:

- None.

### ListingDetails:

Inputs:

- Object representing the selected listing.

States:

- None.
