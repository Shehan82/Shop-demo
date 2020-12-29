import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";

const ListingScreen = ({ navigation }) => {
  const data = [
    {
      id: 1,
      title: "Jaclet for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "couch for sale",
      price: 380,
      image: require("../assets/couch.jpg"),
    },
    {
      id: 3,
      title: "picture for sale",
      price: 4500,
      image: require("../assets/dark.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$ " + item.price}
            image={item.image}
            onPress={() => {
              navigation.navigate("ListingDetails", item);
            }}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              height: 30,
            }}
          />
        )}
      />
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
