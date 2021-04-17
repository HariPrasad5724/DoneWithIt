import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { View, StyleSheet, Image } from "react-native";
import { create } from "apisauce";
import * as Yup from "yup";

import config from "../config/config";

import ErrorMessage from "./ErrorMessage";
import AppButton from "../component/AppButton";
import AppTextInput from "../component/AppTextInput";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Student_Login(props) {
  // const [login, setlogin] = useState({ email: "", password: "" });

  const api = create({
    baseURL: config["baseUrl"],
  });

  const handleSubmit = (values) => {
    // event.preventDefault();

    // api
    //   .get(config["loginEndPoint"])
    //   .then((response) => response)
    //   .then(console.log);
    console.log(values);

    api
      .post(config["loginEndPoint"], values)
      .then((response) => response)
      .then(console.log)
      .catch(console.log);

    console.log(values);
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
                icon="email"
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="gray"
                autoCorrect={false}
                onChangeText={handleChange("Email")}
                keyboardType="email-address"
                onBlur={() => setFieldTouched("Email")}
                autoFocus={true}
              />
              <ErrorMessage error={errors.Email} visible={touched.Email} />
            </View>
            <View>
              <AppTextInput
                icon="lock"
                autoCapitalize="none"
                placeholderTextColor="gray"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("Password")}
                onBlur={() => setFieldTouched("Password")}
                keyboardType="default"
                secureTextEntry={true}
              />
              <ErrorMessage
                error={errors.Password}
                visible={touched.Password}
              />
            </View>

            <AppButton
              title="Login"
              onPress={
                // (handleSubmit,
                // () => props.navigation.navigate("Student_Portal"))
                handleSubmit
              }
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
});
export default Student_Login;
