import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#236dd5",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginVertical: 10,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default CustomButton;
