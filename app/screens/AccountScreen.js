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
    target: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
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
                navigation.navigate(item.target);
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

      <View style={styles.logout}>
        <ListItem
          title="Log Out"
          ImageComponent={
            <Icon name="logout" color="white" bgColor="yellow" size={40} />
          }
          onPress={() => {
            console.log("logOut pressd!");
          }}
        />
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  logout: {
    marginTop: 40,
  },
});
