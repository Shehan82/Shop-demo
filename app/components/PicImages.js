import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image, Modal } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const PicImages = () => {
  const [url, setUrl] = useState();
  const [modalVisibility, setModalVisibility] = useState(false);

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
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisibility(true);
        }}
      >
        <Image source={{ uri: url }} style={{ width: 100, height: 100 }} />
      </TouchableWithoutFeedback>

      <Modal transparent={true} visible={modalVisibility} animationType="slide">
        <View style={styles.outerModalView}>
          <View style={styles.innerModalView}>
            <Text>skldfj</Text>
            <Button
              title="close"
              onPress={() => {
                setModalVisibility(false);
              }}
            />
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </View>
  );
};

export default PicImages;

const styles = StyleSheet.create({
  outerModalView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 10,
  },
  innerModalView: {
    width: 300,
    height: 300,
    borderColor: "blue",
    borderWidth: 2,
  },
});
