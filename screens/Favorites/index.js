import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListingCard from "../../components/ListingCard";
import NavigationBar from "../../components/NavigationBar";

const Favorites = ({ listings }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <ListingCard item={item} navigation={navigation} />
  );

  return (
    <View style={styles.test}>
      <FlatList
        data={listings}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 12,
    paddingBottom: 70,
  },
  test: {
    height: "100%",
  },
});

export default Favorites;
