import React, { useContext } from "react";
import { Formik } from "formik";
import { View, StyleSheet, Image, Alert } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import AppTextInput from "../component/AppTextInput";
import AppButton from "../component/AppButton";
import ErrorMessage from "./ErrorMessage";

import AuthContext from "../auth/context";
import authApi from "../services/auth";
import authStorage from "../services/authStorage";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  Email: Yup.string().required().email().label("Email"),
  Password: Yup.string().required().min(4).label("Password"),
});

function Login(props) {
  const authContext = useContext(AuthContext);

  const handleSubmit = async (values) => {
    const body = { ...values };

    try {
      const result = await authApi.login(body);
      if (!result.ok) {
        Alert.alert("Invalid Email or Password!!!");
      } else {
        authContext.setUser(jwtDecode(result.data));
        authStorage.storeToken(result.data);
        if (jwtDecode(result.data).isStaff)
          props.navigation.navigate("Display_Class");
        else props.navigation.navigate("Student_Portal");
      }
    } catch (error) {
      console.log(error);
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
        initialValues={{ Email: "", Password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (
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
              color={colors.red}
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
    flex: 1,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
});
export default Login;
