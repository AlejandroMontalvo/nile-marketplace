import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "@rneui/themed";
import NavigationBar from "../../components/NavigationBar";
import CustomButton from "../../components/CustomButton";

const Profile = ({ userData }) => {
  const user = userData[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require(`../../${user.image}`)} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.userId}>User ID: {user.id}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statLabel}>Listings</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Sales</Text>
          </View>
        </View>
        <Text style={styles.bio}>{user.bio}</Text>
        <CustomButton
          onPress={null}
          title="Logout"
          color={"#e74c3c"}
          iconName="logout"
        />
      </View>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  header: {
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userId: {
    fontSize: 16,
    color: "gray",
  },
  infoContainer: {
    alignItems: "center",
    padding: 10,
  },
  bio: {
    fontSize: 16,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    width: "100%",
  },
  statItem: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  statNumber: {
    fontSize: 21,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 16,
  },
});

export default Profile;
