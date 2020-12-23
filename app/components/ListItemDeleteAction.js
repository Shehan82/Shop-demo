import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <MaterialIcons name="delete" size={40} color="black" />
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff5252",
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
