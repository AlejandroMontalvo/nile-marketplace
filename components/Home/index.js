import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Card, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Home = ({ listings }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    let imageSource = item.item_image.startsWith("data")
      ? item.item_image
      : require(`../../${item.item_image}`);

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Listing Details", { item })}
        style={styles.cardContainer}
      >
        <Card containerStyle={styles.card}>
          <Card.Image source={imageSource} resizeMode="contain" />
          <Card.Title style={styles.title}>{item.title}</Card.Title>
          <Card.Divider />
          <View style={styles.row}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.condition}>{item.condition}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={listings}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Create New Listing")}
      >
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexBasis: "50%",
  },
  card: {
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "inter-medium",
    fontSize: 24,
  },
  price: {
    fontFamily: "inter-bold",
    fontSize: 16,
  },
  condition: {
    fontFamily: "inter-regular",
    fontSize: 14,
    color: "gray",
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  addButton: {
    position: "fixed",
    bottom: 20,
    backgroundColor: "#0e4da4",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 1,
  },
});

export default Home;
