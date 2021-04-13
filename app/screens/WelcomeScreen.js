import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../component/AppButton";
function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../../assets/bg.jpg")}
    >
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <View style={styles.logoContainer}>
        <Text style={{ fontSize: 22 }}>Coimbatore Institute of Technology</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Tutor Login"
          color="tomato"
          onPress={() => navigation.navigate("Staff_Login")}
        />
        <AppButton
          title="Student Login"
          color="dodgerblue"
          onPress={() => navigation.navigate("Student_Login")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 80,
    height: 80,
    position: "absolute",
    top: 50,
  },

  logoContainer: {
    position: "absolute",
    top: 130,
    alignItems: "center",
  },

  textApp: {
    fontSize: 20,
    paddingVertical: 20,
    color: "black",
  },
});
export default WelcomeScreen;
