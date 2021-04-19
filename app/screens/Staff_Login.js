import React, { useContext } from "react";
import { Formik } from "formik";
import { View, StyleSheet, Image, Alert } from "react-native";
import { create } from "apisauce";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import AppTextInput from "../component/AppTextInput";
import AppButton from "../component/AppButton";
import ErrorMessage from "./ErrorMessage";

import config from "../config/config";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  Email: Yup.string().required().email().label("Email"),
  Password: Yup.string().required().min(4).label("Password"),
});

function Staff_Login(props) {
  const api = create({
    baseURL: config["baseUrl"],
  });

  const authContext = useContext(AuthContext);

  const handleSubmit = async (values) => {
    const body = { ...values };

    try {
      await api
        .post(config["loginEndPoint"], body)
        .then((response) => {
          if (
            response.data.toLowerCase() ===
            "User credentials are wrong".toLowerCase()
          ) {
            Alert.alert("Invalid Email or Password!!!");
          } else {
            authContext.setUser(jwtDecode(response.data));
            authContext.setauthToken(response.data);
            if (jwtDecode(response.data).isStaff) {
              (() => props.navigation.navigate("Display_Class"))();
            } else {
              (() => props.navigation.navigate("Student_Portal"))();
            }
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
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={handleChange("Email")}
                // onBlur={() => setFieldTouched("email")}
                // autoFocus={true}
              />
              <ErrorMessage error={errors.Email} visible={touched.Email} />
            </View>

            <View>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                keyboardType="default"
                onChangeText={handleChange("Password")}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry={true}
                // onBlur={() => setFieldTouched("password")}
              />

              <ErrorMessage
                error={errors.Password}
                visible={touched.Password}
              />
            </View>

            <AppButton onPress={handleSubmit} title="Login" />
            <AppButton
              onPress={() => props.navigation.navigate("ForgotPassword")}
              title="Forgot Password"
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
    backgroundColor: "lightgray",
    flex: 1,
  },
  logo: {
    width: 120,
    height: 120,
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
