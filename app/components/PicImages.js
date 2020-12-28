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
import * as Permission from "expo-permissions";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const PicImages = () => {
  //   const [url, setUrl] = useState();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [data, setdata] = useState([]);
  const [deleteUrl, setDeleteUrl] = useState("");
  var key = 0;

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
      const url1 = result.uri;
      // console.log(result.base64);
      //   setUrl(url1);
      // setKey(key++);
      // console.log(key);
      console.log(key);
      setdata([url1, ...data]);

      //   console.log(data);
      //   console.log(url1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        <TouchableWithoutFeedback
          style={styles.imageLibrary}
          onPress={openLibrary}
        >
          <MaterialCommunityIcons name="camera" size={40} color="#635e5e" />
        </TouchableWithoutFeedback>

        <FlatList
          data={data}
          keyExtractor={(item) => item}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                setDeleteUrl(item);
                setModalVisibility(true);
              }}
            >
              <Image
                source={{ uri: item }}
                style={{ width: 100, height: 100 }}
              />
            </TouchableWithoutFeedback>
          )}
        />
      </View>

      {/* {data.map((url) => (
        <TouchableWithoutFeedback
          onPress={() => {
            setDeleteUrl(url);
            setModalVisibility(true);
          }}
        >
          <Image source={{ uri: url }} style={{ width: 100, height: 100 }} />
        </TouchableWithoutFeedback>
      ))} */}

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
  imageLibrary: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: 15,
  },
});
