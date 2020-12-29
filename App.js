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

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // const tweet = ({ navigation }) => (
  //   <View>
  //     <Text>Tweet</Text>
  //     <Button
  //       title="View tweet"
  //       onPress={() => navigation.navigate("tweetDetails", { id: 2 })}
  //     />
  //   </View>
  // );

  // const account = ({ navigation }) => (
  //   <View>
  //     <Text>Account</Text>
  //   </View>
  // );

  // const tweetDetails = ({ navigation, route }) => (
  //   <View>
  //     <Text>tweet details {route.params.id}</Text>
  //     <Button title="Go Back" onPress={() => navigation.navigate("tweets")} />
  //   </View>
  // );
  const Stack = createStackNavigator(); //this returns the object

  // const StackNavigator = () => (
  //   <Stack.Navigator>
  //     <Stack.Screen
  //       name="tweets"
  //       component={tweet}
  //       options={{
  //         headerStyle: { backgroundColor: "red" },
  //       }}
  //     />
  //     <Stack.Screen name="tweetDetails" component={tweetDetails} />
  //   </Stack.Navigator>
  // );

  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="ListEdit"
        component={ListingDetailsScreen}
        options={{
          headerStyle: { backgroundColor: "red" },
        }}
      />
      <Stack.Screen name="tweetDetails" component={tweetDetails} />
    </Stack.Navigator>
  );

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={ListingScreen} />
      <Tab.Screen name="AddNew" component={ListEditScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
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
