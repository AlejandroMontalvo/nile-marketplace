import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import ListingDetails from "./components/ListingDetails";
import CreateNewListing from "./components/CreateNewListing";
import * as Font from "expo-font";
import listingsData from "./assets/listings.json";

const Stack = createStackNavigator();

const App = () => {
  const [listings, setListings] = useState(listingsData);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
        "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
        "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
      });
    }

    loadFonts();
  }, []);

  const addListing = (newListing) => {
    setListings([...listings, newListing]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} listings={listings} />}
        </Stack.Screen>
        <Stack.Screen name="Listing Details" component={ListingDetails} />
        <Stack.Screen name="Create New Listing">
          {(props) => <CreateNewListing {...props} addListing={addListing} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
