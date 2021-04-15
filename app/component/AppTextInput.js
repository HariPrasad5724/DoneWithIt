import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function AppTextInput({ icon, maxLength, placeholder, ...others }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          size={30}
          color="black"
          name={icon}
        />
      )}
      <TextInput
        placeholderTextColor="black"
        style={styles.textInput}
        placeholder={placeholder}
        maxLength={maxLength}
        {...others}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 50,
    flexDirection: "row",
    width: "100%",
    height: 70,
    padding: 15,
    marginVertical: 40,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    paddingTop: 20,
    borderBottomColor: "black",
    color: "black",
  },
});
export default AppTextInput;
