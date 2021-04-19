import React, { useState } from "react";
import { View, Alert } from "react-native";
import AppButton from "../component/AppButton";
import AppTextInput from "../component/AppTextInput";
import ErrorMessage from "../component/ErrorMessage";
import { create } from "apisauce";
import config from "../config/config";
import AuthContext from "../auth/context";

function ForgotPassword(props) {
  const [Email, setEmail] = useState("");

  const api = create({
    baseURL: config["baseUrl"],
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Email.length === 0) return Alert.alert("Enter Valid Email Address!!!");
    const body = {
      Email,
    };
    try {
      await api
        .post(config["forgotPasswordEndPoint"], body)
        .then((response) => {
          Alert.alert(response.data);
          props.navigation.navigate("Login");
        })
        .catch(console.log);
    } catch (error) {
      Alert.alert("Something Went Wrong!!!");
    }
  };

  return (
    <View>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor="gray"
        onChangeText={(e) => setEmail(e)}
        value={Email}
      />
      <AppButton title="Send Mail" onPress={(e) => onSubmit(e)} />
    </View>
  );
}

export default ForgotPassword;
