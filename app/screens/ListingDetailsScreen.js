import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.img} source={require("../assets/jacket.jpg")} />
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 250,
  },
});
