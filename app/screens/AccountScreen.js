import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";

const data = [
  {
    title: "My Listing",
    icon: {
      name: "email",
      size: 40,
      color: "white",
      bgColor: "red",
    },
  },
  {
    title: "MY Messages",
    icon: {
      name: "format-list-bulleted",
      size: 40,
      color: "white",
      bgColor: "green",
    },
  },
];

const AccountScreen = () => {
  return (
    <View>
      <ListItem
        title="Shehan Sandeepa"
        subtitle="Shehansandeepa82@gmail.com"
        image={require("../assets/new.jpg")}
      />

      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => {
                console.log("ksjd");
              }}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  color={item.icon.color}
                  size={item.icon.size}
                  bgColor={item.icon.bgColor}
                />
              }
            />
          )}
        />
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginTop: 40,
    // backgroundColor: "white",
  },
});
