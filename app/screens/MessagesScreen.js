import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const MessagesScreen = () => {
  const messages = [
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("../assets/new.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/new.jpg"),
    },
    {
      id: 3,
      title: "T2",
      description: "D2",
      image: require("../assets/new.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => {
              console.log(`${item.title}`);
            }}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              height: 1 / 2,
              backgroundColor: "lightgrey",
            }}
          />
        )}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
