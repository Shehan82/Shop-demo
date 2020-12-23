import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.img} source={require("../assets/jacket.jpg")} />
      <View style={styles.txtContainer}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          Jacket for sale!
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "green",
            marginTop: 10,
          }}
        >
          $100
        </Text>
      </View>
      <ListItem
        title="Shehan Sandeepa"
        subtitle="8 Listing"
        image={require("../assets/new.jpg")}
      />
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 250,
  },
  txtContainer: {
    padding: 20,
  },
});
