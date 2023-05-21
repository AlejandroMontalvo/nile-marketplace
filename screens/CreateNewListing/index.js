import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/BackButton";

const CreateNewListing = ({ addListing }) => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const addItem = () => {
    if (title && price && condition && description && image) {
      const newListing = {
        title: title,
        price: `$${price}`,
        condition: condition,
        description: description,
        item_image: image,
      };
      addListing(newListing);
      navigation.navigate("Home");
    }
  };

  const handlePriceChange = (value) => {
    // Only allow numbers and a single decimal point
    const regex = /^[0-9]*$/;
    if (regex.test(value)) {
      setPrice(value);
    }
  };

  return (
    <View style={styles.container}>
      <BackButton />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.priceSymbol}>$</Text>
        <TextInput
          style={styles.priceInput}
          placeholder="Price"
          value={price}
          keyboardType="decimal-pad"
          onChangeText={handlePriceChange}
        />
      </View>
      <Picker
        style={[
          styles.input,
          condition === ""
            ? styles.pickerInputUnselected
            : styles.pickerInputSelected,
        ]}
        selectedValue={condition}
        onValueChange={(value) => setCondition(value)}
        itemStyle={styles.input}
        fontFamily="Manrope-Regular"
      >
        <Picker.Item
          label="Select Condition"
          value=""
          color="gray"
          fontFamily="Manrope-Regular"
        />
        <Picker.Item label="New" value="New" color="black" />
        <Picker.Item label="Like New" value="Like New" color="black" />
        <Picker.Item label="Good" value="Good" color="black" />
        <Picker.Item label="Fair" value="Fair" color="black" />
        <Picker.Item label="Poor" value="Poor" color="black" />
      </Picker>
      <TextInput
        style={[styles.input, styles.richInput]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={5}
      />
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Create New Listing</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
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
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    placeholderTextColor: "grey",
  },
  priceSymbol: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
    marginRight: 2,
    fontFamily: "Manrope-Regular",
  },
  priceInput: {
    borderWidth: 0,
    borderColor: "gray",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    flex: 1,
    fontFamily: "Manrope-Regular",
    fontSize: 16,
  },
  pickerInputUnselected: {
    color: "grey",
  },
  pickerInputSelected: {
    color: "black",
  },
  richInput: {
    height: "initial",
  },
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
  createButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#236dd5",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  image: {
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    marginVertical: 10,
    resizeMode: "contain",
  },
});

export default CreateNewListing;
