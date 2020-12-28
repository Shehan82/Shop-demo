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

import AddImageIcon from "./AddImageIcon";
import AddedImagesList from "./AddedImagesList";
import PicImagesModal from "./PicImagesModal";
const PicImages = ({ selectedImages }) => {
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
    selectedImages(data);
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

  const setVisibilityFalse = () => {
    setModalVisibility(false);
  };

  const modalYesButton = () => {
    setdata(data.filter((m) => m != deleteUrl));
    setModalVisibility(false);
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={styles.container}>
        <AddImageIcon disable={imageState} onPress={openLibrary} />

        <AddedImagesList data={data} press={clickImage} />
      </View>

      <PicImagesModal
        visible={modalVisibility}
        visibleFalse={setVisibilityFalse}
        yesButton={modalYesButton}
      />
    </View>
  );
};

export default PicImages;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
});
