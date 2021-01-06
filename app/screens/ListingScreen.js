import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import listingApi from "../api/listing";
import client from "../api/client";
import axios from "../api/axios";

const ListingScreen = ({ navigation }) => {
  const [apiData, setApiData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // axios.get("/api/listing").then((res) => {
    //   // setApiData(res.data);
    //   console.log(res.data);
    // });

    // listingApi.getListing().then((res) => {
    //   setApiData(res.data);
    // });
    loadListing();
  }, []);
  console.log(apiData);

  const loadListing = async () => {
    await client.get("/listing").then((res) => {
      if (!res.ok) {
        return setError(true);
      } else {
        setError(false);
        console.log(res.data);
      }
    });
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
      {error && (
        <>
          <Text>There is a error</Text>
          <Button
            title="reload"
            onPress={() => {
              loadListing();
            }}
          />
        </>
      )}
      <ActivityIndicator animating={true} color="green" />
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
