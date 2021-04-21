import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function UploadTabButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="file-upload-outline"
          size={30}
          color={"white"}
        />
      </View>
    </TouchableOpacity>
  );
}

export default UploadTabButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "dodgerblue",
    borderColor: "white",
    borderRadius: 40,
    borderWidth: 10,
    bottom: 10,
    height: 70,
    justifyContent: "center",
    width: 70,
  },
});
