import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/back.jpg")}
    >
      <View style={styles.loginButton} />
      <View style={styles.signUpButton} />
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    backgroundColor: "gold",
    width: "100%",
    height: 50,
  },
  signUpButton: {
    backgroundColor: "tomato",
    width: "100%",
    height: 50,
  },
});
