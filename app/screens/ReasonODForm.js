import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import ErrorMessage from "./ErrorMessage";

import DocumentPickerApp from "./DocumentPicker";

import * as Yup from "yup";
import AppButton from "../component/AppButton";
import AppTextInput from "../component/AppTextInput";
import AppPicker from "../component/AppPicker";
import AuthContext from "../auth/context";
import AppText from "../component/AppText";
import AppDatePicker from "../component/AppDatePicker";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const validationSchema = Yup.object().shape({
  roll_no: Yup.string().required().length(7).label("Roll No"),
  description: Yup.string().required().length(50).label("Description"),
  reason: Yup.string().required(),
});

function ReasonODForm(props) {
  const categories = [
    {
      id: 1,
      label: "Personal Documents",
      value: "PD",
    },
    {
      id: 2,
      label: "On Duty",
      value: "OD",
    },
    {
      id: 3,
      label: "Others",
      value: "OTHERS",
    },
  ];

  const [category, setCategory] = useState(categories[0]);

  const { user, authToken } = useContext(AuthContext);

  const [documentDetails, setdocumentDetails] = useState();

  const readDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/*",
      });
      setdocumentDetails(result);
    } catch (error) {
      console.log("Can't open file", error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
      </View>
      <Formik
        initialValues={{ roll_no: "", description: " ", reason: "", docs: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          <>
            <View>
              <AppTextInput
                placeholder="Roll no"
                autoCapitalize="none"
                placeholderTextColor="gray"
                autoCorrect={false}
                onChangeText={handleChange("roll_no")}
                keyboardType="numeric"
                onBlur={() => setFieldTouched("roll_no")}
                autoFocus={true}
              />
              <ErrorMessage error={errors.roll_no} visible={touched.roll_no} />
            </View>

            <View>
              <AppTextInput
                autoCapitalize="none"
                placeholderTextColor="gray"
                placeholder="Description"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("reason")}
                onBlur={() => setFieldTouched("reason")}
                keyboardType="default"
              />

              <ErrorMessage error={errors.reason} visible={touched.reason} />
            </View>

            <View>
              <AppPicker
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                items={categories}
                placeholder="Reason for Leave"
                icon="apps"
              />
            </View>

            <AppDatePicker />
            <TouchableOpacity
              onPress={readDocument}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 5,
                width: 150,
              }}
            >
              <MaterialCommunityIcons name="paperclip" size={28} color="grey" />
              <AppText style={{ fontSize: 15 }}>Add</AppText>
            </TouchableOpacity>
            {documentDetails && (
              <View
                style={{
                  width: 300,
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 5,
                  margin: 10,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 24,
                  flexDirection: "row",
                  overflow: "hidden",
                }}
              >
                <Text style={{ width: 200, fontSize: 14 }}>
                  {documentDetails.name}
                </Text>
                <MaterialCommunityIcons
                  onPress={() => setdocumentDetails(null)}
                  name="close"
                  size={24}
                  color="grey"
                />
              </View>
            )}

            <AppButton
              onPress={
                (handleSubmit,
                () => props.navigation.navigate("Student_Portal"))
              }
              title={"Submit Docs"}
              color="dodgerblue"
            />
          </>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#3b5998",
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 30,
  },
  textInput: {
    fontSize: 18,

    borderBottomColor: "black",
    color: "black",
  },
  text: {
    color: "white",
    fontSize: 25,
  },
  button: {
    backgroundColor: "tomato",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
    marginVertical: 25,
  },
});
export default ReasonODForm;
