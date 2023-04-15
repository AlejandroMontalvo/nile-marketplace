import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/Home";
import ListingDetailsScreen from "./components/ListingDetails";
import CreateNewListing from "./components/CreateNewListing";
import * as Font from "expo-font";
import listings from "./assets/listings.json";

const fetchFonts = async () => {
  await Font.loadAsync({
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
  });
};

const Stack = createStackNavigator();

const App = () => {
  fetchFonts();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={() => <HomeScreen listings={listings} />}
        />
        <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
        <Stack.Screen name="Create New Listing" component={CreateNewListing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
