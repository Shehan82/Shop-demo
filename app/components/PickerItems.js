import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Platform,
} from "react-native";
import Icon from "./Icon";

const PickerItems = ({ name, onPress, iconName, iconBgColor }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} bgColor={iconBgColor} size={80} color="white" />
          <Text style={styles.txt} numberOfLines={2}>
            {name}
          </Text>
        </View>
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
  iconContainer: {
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 2,
    width: 100,
    alignContent: "center",
  },
  txt: {
    marginTop: 3,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    fontSize: 15,
    fontWeight: "600",
  },
});
