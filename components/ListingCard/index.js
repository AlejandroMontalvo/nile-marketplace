import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Card, Text } from "@rneui/themed";

const ListingCard = ({ item, navigation }) => {
  let imageSource = item.image.startsWith("data")
    ? item.image
    : require(`../../${item.image}`);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Listing Details", { item })}
      style={styles.cardContainer}
    >
      <Card containerStyle={styles.card}>
        <Card.Image source={imageSource} resizeMode="contain" />
        <Card.Title style={styles.title}>{item.title}</Card.Title>
        <View style={styles.row}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.condition}>{item.condition}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexBasis: "50%",
  },

  card: {
    borderRadius: 8,
    borderWidth: 0,
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Manrope-Regular",
    fontSize: 24,
    margin: 5,
  },
  price: {
    fontFamily: "Manrope-Bold",
    fontSize: 18,
    color: "#236dd5",
  },
  condition: {
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    color: "#7ba7e6",
  },
});

export default ListingCard;
