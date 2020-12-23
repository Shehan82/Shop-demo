import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, size, color, bgColor }) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={color} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {},
});
