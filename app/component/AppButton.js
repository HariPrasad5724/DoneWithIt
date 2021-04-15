import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
function AppButton({ onPress, title, color }) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor: color }]}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    height: 50,
  },
});
export default AppButton;
