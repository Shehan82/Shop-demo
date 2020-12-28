import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import PicImages from "../components/PicImages";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().label("Price"),
  description: Yup.string().required().label("Description"),
});

const ListEditScreen = () => {
  const Categories = [
    {
      label: "Furniture",
      value: 1,
      iconName: "table-furniture",
      iconBgColor: "#ea686a",
    },
    {
      label: "Cars",
      value: 2,
      iconName: "car",
      iconBgColor: "#f19c57",
    },
    {
      label: "Camers",
      value: 3,
      iconName: "camera",
      iconBgColor: "#fad355",
    },
    {
      label: "Clothing",
      value: 4,
      iconName: "shoe-heel",
      iconBgColor: "#63c9bb",
    },
    {
      label: "Games",
      value: 5,
      iconName: "gamepad-variant",
      iconBgColor: "#6cdb8b",
    },
    {
      label: "Sports",
      value: 6,
      iconName: "football",
      iconBgColor: "#62aaeb",
    },
    {
      label: "Music",
      value: 7,
      iconName: "headphones",
      iconBgColor: "#547de3",
    },
    {
      label: "Books",
      value: 8,
      iconName: "book-open-variant",
      iconBgColor: "#547de3",
    },
    {
      label: "Other",
      value: 9,
      iconName: "more",
      iconBgColor: "#7d8ca5",
    },
  ];
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: "", price: "", Category: "", description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
          setFieldValue,
        }) => (
          <>
            <PicImages />
            <AppTextInput
              placeholder="Title"
              onBlur={() => {
                setFieldTouched("title");
              }}
              onChangeText={handleChange("title")}
            />
            {touched.title && errors.title && (
              <Text style={{ color: "red" }}>{errors.title}</Text>
            )}

            <AppTextInput
              onChangeText={handleChange("price")}
              onBlur={() => {
                setFieldTouched("price");
              }}
              placeholder="Price"
            />
            {touched.price && errors.price && (
              <Text style={{ color: "red" }}>{errors.price}</Text>
            )}

            <AppPicker
              item={Categories}
              placeholder="Category"
              onSelectItem={(item) => setFieldValue("Category", item)}
            />
            {touched.Category && errors.Category && (
              <Text style={{ color: "red" }}>{errors.Category}</Text>
            )}

            <AppTextInput
              onChangeText={handleChange("description")}
              onBlur={() => {
                setFieldTouched("description");
              }}
              placeholder="Description"
            />
            {touched.description && (
              <Text style={{ color: "red" }}>{errors.description}</Text>
            )}

            <AppButton
              title="POST"
              onPress={handleSubmit}
              color="#00a95c"
              txtColor="white"
            />
          </>
        )}
      </Formik>

      {/* <AppTextInput placeholder="Title" />
      <AppTextInput placeholder="Price" />
      <AppPicker item={Categories} />
      <AppTextInput placeholder="Description" />
      <AppButton
        title="POST"
        onPress={() => {
          console.log("hi");
        }}
        color="#00a95c"
        txtColor="white"
      /> */}
    </View>
  );
};

export default ListEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
