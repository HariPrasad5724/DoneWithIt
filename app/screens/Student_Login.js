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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function Student_Login(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          <>
            <View style={styles.radiusDef}>
              <MaterialCommunityIcons
                style={styles.icon}
                size={20}
                color="black"
                name="email"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="gray"
                autoCorrect={false}
                onChangeText={handleChange("email")}
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                autoFocus={true}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
            </View>

            <View style={styles.radiusDef}>
              <MaterialCommunityIcons
                style={styles.icon}
                size={20}
                color="black"
                name="lock"
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholderTextColor="gray"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                keyboardType="default"
                secureTextEntry={true}
              />

              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
            </View>

            <View style={{ paddingTop: 50 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={
                  (handleSubmit,
                  () => props.navigation.navigate("Student_Portal"))
                }
              >
                <Text style={styles.text}>Login</Text>
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
    marginTop: 30,
    marginBottom: 20,
  },
  icon: {
    paddingTop: 10,
    paddingLeft: 20,
  },
  textInput: {
    fontSize: 18,
    paddingLeft: 60,
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
    paddingTop: 10,
    width: "100%",
    paddingEnd: 15,
    marginVertical: 25,
  },
  radiusDef: {
    marginTop: 30,
    paddingTop: 10,
    borderRadius: 80,
    paddingLeft: 30,
    backgroundColor: "white",
  },
});
export default Student_Login;
