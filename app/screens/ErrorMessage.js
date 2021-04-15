import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../component/AppText";
function ErrorMessage(props) {
  if (!props.visible || !props.error) return null;
  return <AppText style={styles.error} title={props.error} />;
}

const styles = StyleSheet.create({
  error: { color: "red", paddingLeft: 50, fontSize: 18, fontWeight: "500" },
});
export default ErrorMessage;
