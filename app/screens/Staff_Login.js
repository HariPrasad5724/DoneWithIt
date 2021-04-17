import React, { useState } from "react";
import { Formik } from "formik";
import { View, StyleSheet, Image } from "react-native";
import { create } from "apisauce";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import AppTextInput from "../component/AppTextInput";
import AppButton from "../component/AppButton";
import ErrorMessage from "./ErrorMessage";

import config from "../config/config";
import { useContext } from "react";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Staff_Login(props) {
  const api = create({
    baseURL: config["baseUrl"],
  });

  const authContext = useContext(AuthContext);
  const handleSubmit = (values) => {
    const body = { ...values };
    body["Email"] = body["email"];
    body["Password"] = body["password"];
    delete body.email;
    delete body.password;
    console.log(body);

    try {
      api
        .post(config["loginEndPoint"], body)
        .then((response) => {
          authContext.setUser(jwtDecode(response.data));
          if (jwtDecode(response.data).isStaff) {
            (() => props.navigation.navigate("Display_Class"))();
          } else {
            (() => props.navigation.navigate("Student_Portal"))();
          }
        })
        .catch(console.log);
    } catch (error) {}
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
        initialValues={{ Email: "", Password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          <>
            <View>
              <AppTextInput
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="gray"
                autoCorrect={false}
                onChangeText={handleChange("email")}
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                autoFocus={true}
                icon="email"
              />
              <ErrorMessage error={errors.Email} visible={touched.Email} />
            </View>

            <View>
              <AppTextInput
                autoCapitalize="none"
                placeholderTextColor="gray"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                keyboardType="default"
                secureTextEntry={true}
                icon="lock"
              />

              <ErrorMessage
                error={errors.Password}
                visible={touched.Password}
              />
            </View>

            <AppButton onPress={handleSubmit} title="Login" />
          </>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "royalblue",
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
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
    paddingTop: 20,
    width: "100%",
    marginVertical: 15,
  },
  radiusDef: {
    marginTop: 15,
    borderRadius: 25,
    paddingLeft: 30,
    backgroundColor: "white",
  },
});
export default Staff_Login;
