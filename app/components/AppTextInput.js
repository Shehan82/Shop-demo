import React from "react";
import { StyleSheet, Text, TextInput, View, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={24} color="#1B1B1B" />}
      <TextInput style={styles.txt} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    backgroundColor: "lightgrey",
    borderRadius: 25,
    marginVertical: 10,
  },
  txt: {
    marginLeft: 10,
    width: "90%",
    fontSize: 17,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});
