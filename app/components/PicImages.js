import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const PicImages = async () => {
  const getImagePermission = await ImagePicker.requestCameraPermissionsAsync();
  const result = getImagePermission.granted;
  if (!result) {
    alert("You should enable permission to access the library!");
  }
  useEffect(() => {
    getImagePermission();
  }, []);
  return (
    <View>
      <Text>helloooo</Text>
    </View>
  );
};

export default PicImages;

const styles = StyleSheet.create({});
