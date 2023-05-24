import React from "react";
import { StyleSheet, TextInput } from "react-native";

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    fontSize: 16,
    fontFamily: "Manrope-Regular",
    placeholderTextColor: "grey",
    borderWidth: 0,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default CustomTextInput;
