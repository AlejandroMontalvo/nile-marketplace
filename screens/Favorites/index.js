import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import ListingCard from "../../components/ListingCard";
import NavigationBar from "../../components/NavigationBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favorites = ({ listings }) => {
  const navigation = useNavigation();
  const [favoriteListings, setFavoriteListings] = useState([]);

  useEffect(() => {
    fetchFavoriteListings();
  }, [listings]);

  useFocusEffect(
    React.useCallback(() => {
      // Re-run fetchFavoriteListings when the screen is focused
      fetchFavoriteListings();
    }, [])
  );

  const fetchFavoriteListings = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites) {
        const parsedFavorites = JSON.parse(favorites);
        const favoriteListings = listings.filter((item) =>
          parsedFavorites.includes(item.id)
        );
        setFavoriteListings(favoriteListings);
      } else {
        setFavoriteListings([]);
      }
    } catch (error) {
      console.log("Error retrieving favorites from AsyncStorage:", error);
    }
  };

  const renderItem = ({ item }) => (
    <ListingCard item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      {favoriteListings.length === 0 ? (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            Nothing here yet! Press the ♡ icon on an item to start your
            collection.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoriteListings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    padding: 12,
    paddingBottom: 70,
  },
  messageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  messageText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    margin: 30,
  },
});

export default Favorites;
