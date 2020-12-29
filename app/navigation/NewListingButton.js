import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons color="white" size={30} />
    </View>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
