import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import color from "../config/colors";

function UploadTabButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" size={30} color={"white"} />
      </View>
    </TouchableOpacity>
  );
}

export default UploadTabButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: color.red,
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
});
