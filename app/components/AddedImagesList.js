import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Button,
} from "react-native";

const AddedImagesList = ({ data, press }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        numColumns={3}
        columnWrapperStyle={styles.col}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => {
              press(item);
            }}
          >
            <Image source={{ uri: item }} style={styles.img} />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

export default AddedImagesList;

const styles = StyleSheet.create({
  img: {
    width: 75,
    height: 75,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  col: {
    marginHorizontal: 10,
    // justifyContent: "space-between",
    // borderColor: "red",
    // borderWidth: 2,
    flex: 1,
  },
});
