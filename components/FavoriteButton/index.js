import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoriteButton = ({ itemId }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if the item is already liked and update the state
    checkLikedStatus();
  }, []);

  const checkLikedStatus = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites) {
        const parsedFavorites = JSON.parse(favorites);
        const isLiked = parsedFavorites.includes(itemId);
        setLiked(isLiked);
      }
    } catch (error) {
      console.log("Error retrieving favorites from AsyncStorage:", error);
    }
  };

  const handleLike = async () => {
    try {
      let favorites = await AsyncStorage.getItem("favorites");
      if (favorites) {
        // Update favorites array based on liked status
        const parsedFavorites = JSON.parse(favorites);
        if (liked) {
          // Remove item from favorites
          const updatedFavorites = parsedFavorites.filter(
            (id) => id !== itemId
          );
          favorites = JSON.stringify(updatedFavorites);
        } else {
          // Add item to favorites
          const updatedFavorites = [...parsedFavorites, itemId];
          favorites = JSON.stringify(updatedFavorites);
        }
      } else {
        // Add first item to favorites
        favorites = JSON.stringify([itemId]);
      }
      // Save updated favorites to AsyncStorage
      await AsyncStorage.setItem("favorites", favorites);
      // Update liked state
      setLiked(!liked);
    } catch (error) {
      console.log("Error updating favorites in AsyncStorage:", error);
    }
  };

  return (
    <View style={styles.cardHeader}>
      <TouchableOpacity onPress={handleLike} style={styles.heart}>
        <MaterialIcons
          name={liked ? "favorite" : "favorite-border"}
          size={32}
          color={"#236dd5"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    borderRadius: 20,
    padding: 5,
    margin: 0,
  },
  heart: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteButton;
