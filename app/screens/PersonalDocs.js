import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import DocumentPickerApp from "../screens/DocumentPicker";
import ErrorMessage from "../screens/ErrorMessage";
function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/logo-red.png")}
          />
        </View>

        <View style={styles.ViewStyle}>
          <Text style={styles.textInput}>Birth Certificate</Text>
          <DocumentPickerApp />
        </View>

        <View style={styles.ViewStyle}>
          <Text style={styles.textInput}>12th Mark Certificate</Text>
          <DocumentPickerApp />
        </View>

        <View style={styles.ViewStyle}>
          <Text style={styles.textInput}>10th Mark Certificate</Text>
          <DocumentPickerApp />
        </View>

        <View style={styles.ViewStyle}>
          <Text style={styles.textInput}>Community Certificate</Text>
          <DocumentPickerApp />
        </View>

        <View style={styles.ViewStyle}>
          <Text style={styles.textInput}>Transfer Certificate</Text>
          <DocumentPickerApp />
        </View>

        <View style={styles.ViewStyle}>
          <Text style={styles.textInput}>Aadhar card</Text>
          <DocumentPickerApp />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("Student_Portal")}
          >
            <Text style={styles.text}>Submit Personal Docs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  ViewStyle: {
    backgroundColor: "white",
    borderRadius: 25,
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
  },
});

export default LoginScreen;
