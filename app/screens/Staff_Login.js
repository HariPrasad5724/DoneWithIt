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
import ChooseDesignation from "./ChooseDesignation";
import AppTextInput from "../component/AppTextInput";
import AppButton from "../component/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function Staff_Login(props) {
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
              <ErrorMessage error={errors.email} visible={touched.email} />
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
                error={errors.password}
                visible={touched.password}
              />
            </View>

            <AppButton
              onPress={
                (handleSubmit, () => props.navigation.navigate("Display_Class"))
              }
              title="Login"
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
