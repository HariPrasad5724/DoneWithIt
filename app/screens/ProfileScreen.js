import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthContext from "../auth/context";
import AppButton from "../component/AppButton";
import colors from "../config/colors";
import authStorage from "../services/authStorage";

function ProfileScreen(props) {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFILE</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.text}>Roll No </Text>
        <Text style={styles.subText}>{user.RegisterNo}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.text}>Name </Text>
        <Text style={styles.subText}>{user.Name}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.text}>Email </Text>
        <Text style={styles.subText}>{user.Email}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.text}>Phone </Text>
        <Text style={styles.subText}>{user.Phone}</Text>
      </View>

      <AppButton
        title="logout"
        color={colors.red}
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          props.navigation.navigate("WelcomeScreen");
          authStorage.removeToken();
        }}
      />
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "column",
  },

  text: {
    fontSize: 24,
    fontWeight: "600",
    margin: 10,
    textAlign: "left",
    color: colors.dark,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 20,
    fontWeight: "600",
    margin: 10,
    textAlign: "left",
    color: "black",
    flex: 1,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 30,
    color: colors.blue,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
