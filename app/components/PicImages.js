import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import AddImageIcon from "./AddImageIcon";
import AddedImagesList from "./AddedImagesList";
const PicImages = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [data, setdata] = useState([]);
  const [deleteUrl, setDeleteUrl] = useState("");
  const [imageState, setImageState] = useState(false);

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

  useEffect(() => {
    if (data.length === 3) {
      setImageState(true);
    } else {
      setImageState(false);
    }
  }, [data]);

  const openLibrary = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      const url1 = result.uri;

      setdata([url1, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const clickImage = (item) => {
    setDeleteUrl(item);
    setModalVisibility(true);
  };

  return (
    <View>
      <View style={styles.container}>
        <AddImageIcon disable={imageState} onPress={openLibrary} />

        <View style={styles.listContainer}>
          <AddedImagesList data={data} press={clickImage} />
        </View>
      </View>

      <Modal transparent={true} visible={modalVisibility} animationType="slide">
        <View style={styles.outerModalView}>
          <View style={styles.innerModalView}>
            <Button
              title="close"
              onPress={() => {
                setModalVisibility(false);
              }}
            />
            <Text>Do you want Delete this photo</Text>
            <Button
              title="Yes"
              onPress={() => {
                setdata(data.filter((m) => m != deleteUrl));
                setModalVisibility(false);
              }}
            />
            <Button
              title="No"
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
  container: {
    flexDirection: "row",
  },
});
