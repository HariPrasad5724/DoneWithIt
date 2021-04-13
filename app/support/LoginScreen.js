import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
      </View>

      <View>
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
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoFocus={true}
        />
      </View>

      <View>
        <MaterialCommunityIcons
          style={styles.icon}
          size={20}
          color="black"
          name="lock"
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          keyboardType="visible-password"
          secureTextEntry
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log(email, password)}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 70,
    alignSelf: "center",
    marginTop: 50,
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

export default LoginScreen;
