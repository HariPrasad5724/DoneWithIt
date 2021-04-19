import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop={false}
      source={require("../animation/Done.json")}
    />
  );
}
export default ActivityIndicator;
