import React, { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ListingDetails from "./screens/ListingDetails";
import CreateNewListing from "./screens/CreateNewListing";
import listingsData from "./assets/listings/listingsData.json";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();

const App = () => {
  const [listings, setListings] = useState(listingsData);

  const [fontsLoaded] = useFonts({
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const addListing = (newListing) => {
    setListings([...listings, newListing]);
  };

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} listings={listings} />}
        </Stack.Screen>
        <Stack.Screen name="Listing Details" component={ListingDetails} />
        <Stack.Screen name="Create New Listing">
          {(props) => <CreateNewListing {...props} addListing={addListing} />}
        </Stack.Screen>
        <Stack.Screen name="Favorites">
          {(props) => <Home {...props} listings={listings} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
