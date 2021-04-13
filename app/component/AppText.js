import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AppText(props) {
  return (
    <View>
      <Text style={([styles.textApp], props.style)}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textApp: {
    fontSize: 20,
    paddingVertical: 20,
    color: "black",
  },
});

export default AppText;
