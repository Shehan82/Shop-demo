import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.img} source={image} />
      <View style={styles.txtContainer}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "green",
            marginTop: 10,
          }}
        >
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 200,
  },
  txtContainer: {
    padding: 20,
  },
});
