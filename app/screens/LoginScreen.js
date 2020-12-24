import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.img} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    marginVertical: 100,
  },
  container: {
    alignItems: "center",
  },
});
