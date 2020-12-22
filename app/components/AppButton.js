import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "tomato",
    width: "90%",
    borderRadius: 26,
    height: 30,
  },
});
