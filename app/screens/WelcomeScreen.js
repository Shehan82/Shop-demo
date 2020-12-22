import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/back.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
      <Text style={styles.txt}>We care always</Text>
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
    alignItems: "center",
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
  logo: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 70,
  },
  txt: {
    position: "absolute",
    top: 200,
    fontSize: 20,
    fontWeight: "bold",
  },
});
