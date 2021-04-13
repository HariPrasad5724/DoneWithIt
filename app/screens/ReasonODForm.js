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
            <View
              style={{
                justifyContent: "center",
                alignSelf: "center",
                backgroundColor: "white",
                borderRadius: 25,
                width: "80%",
                paddingBottom: 10,
              }}
            >
              <TextInput
                style={styles.textInput}
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

            <View
              style={{
                justifyContent: "center",
                alignSelf: "center",
                marginTop: 10,
                width: "80%",
                paddingTop: 10,
                backgroundColor: "white",
                borderRadius: 25,
                borderBottomColor: "black",
              }}
            >
              <TextInput
                style={styles.textInput}
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
                borderRadius: 25,
                width: "70%",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textInput}>Attach the Document</Text>
              <DocumentPickerApp />
              <ErrorMessage error={errors.docs} visible={touched.docs} />
            </View>

            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={
                  (handleSubmit,
                  () => props.navigation.navigate("Student_Portal"))
                }
              >
                <Text style={styles.text}>Submit Docs</Text>
              </TouchableOpacity>
            </View>
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
  },
  logo: {
    width: 80,
    height: 70,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 30,
  },
  textInput: {
    fontSize: 18,
    paddingTop: 15,
    paddingLeft: 60,
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
