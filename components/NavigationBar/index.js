import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const NavigationBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const isRouteActive = (routeName) => route.name === routeName;

  const renderIconColor = (routeName) =>
    isRouteActive(routeName) ? "#236dd5" : "#aaa";

  const renderButton = (routeName, iconName) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(routeName)}
      style={styles.button}
    >
      <MaterialIcons
        name={iconName}
        size={30}
        color={renderIconColor(routeName)}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.navigation}>
      {renderButton("Home", "home")}
      {renderButton("Favorites", "favorite")}
      <TouchableOpacity
        onPress={() => navigation.navigate("Create New Listing")}
        style={styles.addButtonWrapper}
      >
        <MaterialIcons name="add" size={40} color="white" />
      </TouchableOpacity>
      <View style={styles.navigationSpacer}></View>
      {renderButton("Inbox", "inbox")}
      {renderButton("Profile", "account-circle")}
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    position: "fixed",
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
  navigationSpacer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 60,
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
