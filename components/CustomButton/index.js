import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CustomButton = ({ onPress, title, color, iconName }) => {
  const buttonStyle = {
    ...styles.button,
    backgroundColor: color || "#236dd5",
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {iconName && (
        <MaterialIcons
          name={iconName}
          size={24}
          color="#fff"
          style={styles.icon}
        />
      )}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginVertical: 10,
    width: "100%",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default CustomButton;
