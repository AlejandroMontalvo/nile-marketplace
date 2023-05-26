import React, { useCallback } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListingCard from "../../components/ListingCard";
import NavigationBar from "../../components/NavigationBar";

const Inbox = ({ listings }) => {
  const navigation = useNavigation();

  const renderItem = useCallback(
    ({ item }) => <ListingCard item={item} navigation={navigation} />,
    [navigation]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    padding: 12,
    paddingBottom: 70,
  },
});

export default Inbox;
