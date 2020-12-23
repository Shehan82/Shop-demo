import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AccountScreen = () => {
  return (
    <View>
      <ListItem
        title="Shehan Sandeepa"
        subtitle="Shehansandeepa82@gmail.com"
        image={require("./app/assets/new.jpg")}
      />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
