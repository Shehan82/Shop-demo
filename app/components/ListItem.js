import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  image,
  title,
  subtitle,
  ImageComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={Colors.light}>
        <View style={styles.container}>
          {image && <Image style={styles.img} source={image} />}
          {ImageComponent}
          <View style={styles.txtContainer}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
            {subtitle && (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "grey",
                }}
              >
                {subtitle}
              </Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  txtContainer: {
    paddingLeft: 20,
    justifyContent: "center",
  },
});
