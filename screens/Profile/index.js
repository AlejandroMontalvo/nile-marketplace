import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Image } from "@rneui/themed";
import NavigationBar from "../../components/NavigationBar";
import CustomTextInput from "../../components/CustomTextInput";
import CustomRichTextInput from "../../components/CustomRichTextInput";
import CustomButton from "../../components/CustomButton";

const Profile = ({ userData }) => {
  const user = userData[0];
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    const storedName = localStorage.getItem("name");
    const storedBio = localStorage.getItem("bio");
    const storedEmail = localStorage.getItem("email");

    if (storedName) {
      setName(storedName);
    }
    if (storedBio) {
      setBio(storedBio);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  };

  const saveUserData = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("bio", bio);
    localStorage.setItem("email", email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <TextInput
          style={styles.name}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
      </View>
      <View style={styles.infoContainer}>
        <CustomRichTextInput
          value={bio}
          onChange={setBio}
          placeholderValue={"Bio"}
        />
        <CustomTextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <CustomButton onPress={saveUserData} title="Save Profile" />
      </View>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  },
  infoContainer: {
    padding: 10,
  },
  input: {
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Profile;
