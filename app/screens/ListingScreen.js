import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import listingApi from "../api/listing";
import axios from "../api/axios";

const ListingScreen = ({ navigation }) => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    // axios.get("/listing").then((res) => {
    //   setApiData(res.data);
    // });

    // listingApi.getListing().then((res) => {
    //   setApiData(res.data);
    // });
    loadListing();
  }, []);
  console.log(apiData);

  const loadListing = async () => {
    const response = await listingApi.getListing();
    setApiData(response.data);
  };

  const data = [
    {
      id: 1,
      title: "Jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "couch for sale",
      price: 380,
      image: require("../assets/couch.jpg"),
    },
    {
      id: 3,
      title: "picture for sale",
      price: 4500,
      image: require("../assets/dark.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$ " + item.price}
            image={item.image}
            onPress={() => {
              navigation.navigate("ListingDetails", item);
            }}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              height: 30,
            }}
          />
        )}
      />
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
