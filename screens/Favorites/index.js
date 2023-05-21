import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListingCard from "../../components/ListingCard";
import NavigationBar from "../../components/NavigationBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favorites = ({ listings }) => {
  const navigation = useNavigation();
  const [favoriteListings, setFavoriteListings] = useState([]);

  useEffect(() => {
    fetchFavoriteListings();
  }, []);

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
  console.log(favoriteListings);
  console.log("poop");

  const renderItem = ({ item }) => (
    <ListingCard item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteListings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
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
});

export default Favorites;
