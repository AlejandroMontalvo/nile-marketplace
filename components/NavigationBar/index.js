import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NavigationBar = ({ activeItem, onSelect }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.navigation}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <MaterialIcons
          name="home"
          size={30}
          color={activeItem === "Home" ? "#236dd5" : "#aaa"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onSelect("favorites")}
        style={styles.button}
      >
        <MaterialIcons
          name="favorite"
          size={30}
          color={activeItem === "favorites" ? "#236dd5" : "#aaa"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Create New Listing")}
        style={styles.addButtonWrapper}
      >
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.button}></View>
      <TouchableOpacity onPress={() => onSelect("inbox")} style={styles.button}>
        <MaterialIcons
          name="inbox"
          size={30}
          color={activeItem === "inbox" ? "#236dd5" : "#aaa"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onSelect("profile")}
        style={styles.button}
      >
        <MaterialIcons
          name="account-circle"
          size={30}
          color={activeItem === "profile" ? "#236dd5" : "#aaa"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    flex: 1,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  addButtonWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#236dd5",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: -30,
    zIndex: 1,
    marginLeft: 80,
    marginRight: 80,
  },
});

export default NavigationBar;
