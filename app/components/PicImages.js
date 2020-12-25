import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";

const PicImages = () => {
  const getImagePermission = async () => {
    const permisson = await ImagePicker.requestCameraPermissionsAsync();
    const result = permisson.granted;
    if (!result) {
      alert("You should enable permission to access the library!");
    }
  };

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
