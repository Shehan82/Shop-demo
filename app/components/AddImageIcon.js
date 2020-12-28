import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AddImageIcon = ({ disable, onPress }) => {
  return (
    <View style={styles.iconContainer}>
      <TouchableWithoutFeedback disabled={disable} onPress={onPress}>
        <MaterialCommunityIcons name="camera" size={40} color="#635e5e" />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AddImageIcon;

const styles = StyleSheet.create({
  iconContainer: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: 15,
  },
});
