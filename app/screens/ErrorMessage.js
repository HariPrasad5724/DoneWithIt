import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../component/AppText";
function ErrorMessage(props) {
  if (!props.visible || !props.error) return null;
  return (
    <AppText style={styles.error} title={props.error}>
      {props.error}
    </AppText>
  );
}

const styles = StyleSheet.create({
  error: { color: "tomato", fontSize: 20, fontWeight: "500" },
});
export default ErrorMessage;
