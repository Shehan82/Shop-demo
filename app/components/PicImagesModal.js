import React from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";

const PicImagesModal = ({ visible, visibleFalse, yesButton }) => {
  return (
    <View>
      <Modal transparent={true} visible={visible} animationType="slide">
        <View style={styles.outerModalView}>
          <View style={styles.innerModalView}>
            <Button title="close" onPress={visibleFalse} />
            <Text>Do you want Delete this photo</Text>
            <Button title="Yes" onPress={yesButton} />
            <Button title="No" onPress={visibleFalse} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PicImagesModal;

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
