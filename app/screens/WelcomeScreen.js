import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
} from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/back.jpg")}
      blurRadius={Platform.OS === "ios" ? 5 : 2}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.txt}>We care always</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="LOGIN" />
        <AppButton title="REGISTER" color="tomato" />
      </View>
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
    // borderColor: "red",
    // borderWidth: 2,
    alignItems: "center",
  },
  txt: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 2,
    padding: 20,
    height: 140,
    justifyContent: "space-between",
  },
});
