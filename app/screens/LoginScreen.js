import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.img} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              icon="email"
              keyboardType="email-address"
              placeholder="email"
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="password"
              secureTextEntry={true}
            />
            <AppButton
              title="LOGIN"
              onPress={handleSubmit}
              color="#00a95c"
              txtColor="white"
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    marginTop: 50,
    marginBottom: 40,
  },
  container: {
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "red",
    flex: 1,
    padding: 15,
  },
});
