import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Card = ({ title, subTitle, image, navigation, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
    </TouchableWithoutFeedback>
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
