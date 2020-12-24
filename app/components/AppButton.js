import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";

const AppButton = ({ title, onPress, color = "gold", txtColor = "black" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={[styles.txt, { color: txtColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gold",
    width: "100%",
    borderRadius: 26,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  txt: {
    fontSize: 17,
    fontWeight: "700",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});
