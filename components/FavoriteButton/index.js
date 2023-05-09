import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FavoriteButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.cardHeader}>
      <TouchableOpacity onPress={handleLike} style={styles.heart}>
        <MaterialIcons
          name={liked ? "favorite" : "favorite-outline"}
          size={36}
          style={liked ? styles.filledHeart : styles.outlinedHeart}
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
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  filledHeart: {
    color: "#236dd5",
  },
  outlinedHeart: {
    color: "#236dd5",
  },
});

export default FavoriteButton;
