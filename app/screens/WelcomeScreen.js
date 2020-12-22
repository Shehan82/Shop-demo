import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/back.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.txt}>We care always</Text>
      </View>
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
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    borderColor: "red",
    // borderWidth: 2,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
