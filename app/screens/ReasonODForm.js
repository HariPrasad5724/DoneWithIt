import React from "react";
import { Formik } from "formik";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from "react-native";
import ErrorMessage from "./ErrorMessage";
import DocumentPickerApp from "./DocumentPicker";
import * as Yup from "yup";
import ChooseCategory from "./ChooseCategory";
import AppButton from "../component/AppButton";
import AppTextInput from "../component/AppTextInput";

const validationSchema = Yup.object().shape({
  roll_no: Yup.string().required().length(7).label("Roll No"),
  description: Yup.string().required().length(50).label("Description"),
  reason: Yup.string().required(),
});

function ReasonODForm(props) {
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
              <ChooseCategory />
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textInput}>Attach the Document</Text>
              <DocumentPickerApp />
              <ErrorMessage error={errors.docs} visible={touched.docs} />
            </View>

            <AppButton
              onPress={
                (handleSubmit,
                () => props.navigation.navigate("Student_Portal"))
              }
              title={"Submit Docs"}
              color="tomato"
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
