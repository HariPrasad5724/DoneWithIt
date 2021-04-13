import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
function AppButton(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.button, { backgroundColor: props.color }]}
      >
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 30,
  },
  button: {
    backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
});
export default AppButton;
