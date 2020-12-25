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
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import PickerItems from "./PickerItems";

const AppPicker = ({ icon, item, placeholder, onSelectItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [holder, setHolder] = useState(
    placeholder ? placeholder : item[0].label
  );
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
          <Text style={styles.txt}>{holder}</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color="#1B1B1B"
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          {Platform.OS === "ios" ? (
            <Button
              title="Press me"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          ) : (
            <TouchableOpacity>
              <Text
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          )}

          {/* <Text>{Categories[0].label}</Text> */}
          <FlatList
            data={item}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItems
                name={item.label}
                onPress={() => {
                  setHolder(item.label);
                  onSelectItem(item.label);
                  setModalVisible(false);
                }}
              />
            )}
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
    marginVertical: 10,
  },
  txt: {
    marginLeft: 10,
    flex: 1,
    fontSize: 17,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
  modal: {},
});
