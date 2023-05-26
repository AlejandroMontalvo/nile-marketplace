import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <MaterialIcons name="arrow-back" size={32} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 42,
    height: 42,
    borderRadius: 21, // Use half of the width and height for circular shape
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Use rgba for transparent background
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 12,
    left: 12,
    zIndex: 1,
  },
});

export default BackButton;
