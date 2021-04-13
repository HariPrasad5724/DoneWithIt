import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function AppTextInput(props) {
  return (
    <View style={styles.container}>
      {props.icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          size={20}
          color="black"
          name={props.icon}
        />
      )}
      <TextInput
        placeholderTextColor="black"
        style={styles.textInput}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 40,
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
