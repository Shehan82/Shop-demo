import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";

const PicImages = () => {
  const [url, setUrl] = useState();

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

  const openLibrary = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      const url = result.uri;
      setUrl(url);

      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Button title="press me if you can" onPress={openLibrary} />
      <Image source={{ uri: url }} style={{ width: 100, height: 100 }} />
    </View>
  );
};

export default PicImages;

const styles = StyleSheet.create({});
