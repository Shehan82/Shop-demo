import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="delete-circle" size={50} color="black" />
        <AntDesign name="closecircle" size={40} color="black" />
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
    top: 30,
    paddingRight: 5,
    paddingLeft: 5,
    // borderWidth: 2,
    // borderColor: "red",
    alignItems: "center",
  },
});
