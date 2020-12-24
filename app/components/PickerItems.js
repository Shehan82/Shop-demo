import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const PickerItems = ({ name, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text>{name}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PickerItems;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
});
