import React, { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home/";
import ListingDetails from "./screens/ListingDetails/";
import CreateNewListing from "./screens/CreateNewListing/";
import Favorites from "./screens/Favorites/";
import Profile from "./screens/Profile/";
import listingData from "./assets/listings/listingData.json";
import messageData from "./assets/messages/messageData.json"
import userData from "./assets/users/userData.json";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();

const App = () => {
  const [listings, setListings] = useState(listingData);

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
          {(props) => <Favorites {...props} listings={listings} />}
        </Stack.Screen>
        <Stack.Screen name="Inbox">
          {(props) => <Inbox {...props} messageData={messageData} />}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => <Profile {...props} userData={userData} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
