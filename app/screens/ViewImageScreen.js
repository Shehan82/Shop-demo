import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ViewImageScreen = () => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <View style={styles.deleteIcon}></View>
        <View style={styles.closeIcon}></View>
      </View>

      <Image
        resizeMode="contain"
        source={require("../assets/dark.jpg")}
        style={styles.img}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    backgroundColor: "tomato",
    width: 50,
    height: 50,
  },
  closeIcon: {
    backgroundColor: "green",
    width: 50,
    height: 50,
  },
  iconContainer: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    top: 60,
    paddingRight: 10,
    paddingLeft: 10,
  },
});
