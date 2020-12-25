import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup";

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
    },
    {
      label: "Clothing",
      value: 2,
    },
    {
      label: "Technology",
      value: 3,
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
