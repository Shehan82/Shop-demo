import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ListItem = ({ image, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <View style={styles.txtContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: "grey",
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  txtContainer: {
    paddingLeft: 20,
  },
});
