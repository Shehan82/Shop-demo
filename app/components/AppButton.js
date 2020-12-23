import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const AppButton = ({ title, onPress, color = "gold" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, , { backgroundColor: color }]}
    >
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gold",
    width: "90%",
    borderRadius: 26,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "500",
  },
});
