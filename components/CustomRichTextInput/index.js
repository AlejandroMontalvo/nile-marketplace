import React from "react";
import { StyleSheet, TextInput } from "react-native";

const CustomRichTextInput = ({ value, onChange, placeholderValue }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholderValue}
      value={value}
      onChangeText={onChange}
      multiline
      numberOfLines={5}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 160,
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

export default CustomRichTextInput;
