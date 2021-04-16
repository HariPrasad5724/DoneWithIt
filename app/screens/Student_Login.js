import React from "react";
import { Formik } from "formik";
import { View, StyleSheet, Image } from "react-native";
import ErrorMessage from "./ErrorMessage";
import * as Yup from "yup";
import AppButton from "../component/AppButton";
import AppTextInput from "../component/AppTextInput";

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
            <View>
              <AppTextInput
                icon="email"
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
            <View>
              <AppTextInput
                icon="lock"
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

            <AppButton
              title="Login"
              onPress={
                (handleSubmit,
                () => props.navigation.navigate("Student_Portal"))
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
