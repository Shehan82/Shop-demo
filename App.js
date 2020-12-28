import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  Button,
  TouchableOpacity,
  Switch,
  Image,
  Alert,
  Dimensions,
  Platform,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import Todo from "./Todo";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import Constants from "expo-constants";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListEditScreen from "./app/screens/ListEditScreen";
import PicImages from "./app/components/PicImages";
// import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  const Categories = [
    {
      label: "Furniture",
      value: 1,
      iconName: "table-furniture",
      iconBgColor: "#ea686a",
    },
    {
      label: "Cars",
      value: 2,
      iconName: "car",
      iconBgColor: "#f19c57",
    },
    {
      label: "Camers",
      value: 3,
      iconName: "camera",
      iconBgColor: "#fad355",
    },
    {
      label: "Clothing",
      value: 4,
      iconName: "shoe-heel",
      iconBgColor: "#63c9bb",
    },
    {
      label: "Games",
      value: 5,
      iconName: "gamepad-variant",
      iconBgColor: "#6cdb8b",
    },
    {
      label: "Sports",
      value: 6,
      iconName: "football",
      iconBgColor: "#62aaeb",
    },
    {
      label: "Movies & Music",
      value: 7,
      iconName: "headphones",
      iconBgColor: "#547de3",
    },
    {
      label: "Books",
      value: 8,
      iconName: "book-open-variant",
      iconBgColor: "#547de3",
    },
    {
      label: "Other",
      value: 9,
      iconName: "more",
      iconBgColor: "#7d8ca5",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <PicImages /> */}
      <ListEditScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
  },
  todoInput: {
    borderColor: "red",
    borderWidth: 1,
    width: 200,
    alignItems: "center",
  },
  tinyLogo: {
    width: 200,
    height: 300,
  },
  buttonStyle: {
    backgroundColor: "blue",
    width: 100,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    marginTop: 20,
    height: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 16,
    fontWeight: "800",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    paddingTop: Constants.statusBarHeight,
  },
});
