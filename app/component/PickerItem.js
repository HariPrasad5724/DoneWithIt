import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function PickerItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <AppText style={styles.text} title={props.label} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItem;
