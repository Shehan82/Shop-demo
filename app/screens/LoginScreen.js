import React from "react";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.img} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              icon="email"
              keyboardType="email-address"
              placeholder="email"
              onBlur={() => {
                setFieldTouched("email");
              }}
              onChangeText={handleChange("email")}
            />
            {touched.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <AppTextInput
              icon="lock"
              onChangeText={handleChange("password")}
              onBlur={() => {
                setFieldTouched("password");
              }}
              placeholder="password"
              secureTextEntry={true}
            />
            {touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
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
