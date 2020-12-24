import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Modal,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

const AppPicker = ({ icon, ...otherProps }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={24} color="#1B1B1B" />
          )}
          <Text style={styles.txt}>Category</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color="#1B1B1B"
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <Button
            title="Press me"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    backgroundColor: "lightgrey",
    borderRadius: 25,
  },
  txt: {
    marginLeft: 10,
    flex: 1,
    fontSize: 17,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
  modal: {
    paddingTop: 30,
  },
});
