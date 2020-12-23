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

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(["shehen sandeepa"]);

  const addToDo = () => {
    setTodos([input, ...todos]);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  console.log(useDeviceOrientation().landscape);

  return (
    <View style={styles.container}>
      <Card
        title="Jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
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
    padding: 20,
    paddingVertical: 100,
    backgroundColor: "#f8f4f4",
  },
});
