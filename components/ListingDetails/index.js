import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image, Text, Card } from "@rneui/themed";

const ListingDetails = ({ route }) => {
  const { item } = route.params;
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? "#0e4da4" : "transparent",
    borderColor: "#0e4da4",
  };

  const textStyle = {
    ...styles.buttonText,
    color: isHovered ? "#fff" : "#0e4da4",
  };
  let imageSource = item.item_image.startsWith("data")
    ? item.item_image
    : require(`../../${item.item_image}`);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} resizeMode="contain" />
      <Card containerStyle={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.condition}>{item.condition}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity
          style={buttonStyle}
          onPress={() => console.log("Purchase button pressed!")}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <Text style={textStyle}>Purchase</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
    borderRadius: 5,
    margin: 5,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "inter-bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: "inter-medium",
  },
  condition: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
    fontFamily: "inter-regular",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "inter-regular",
  },
  button: {
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "inter-regular",
  },
});

export default ListingDetails;
