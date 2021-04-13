import React from "react";
import { View } from "react-native";
import Card from "../component/Card";
function DisplayClass(props) {
  return (
    <View>
      <Card
        title="Upload Personal Docs"
        subtitle="Upload your personal documents like Birth certificates here.."
        image={require("../../assets/logo-red.png")}
      ></Card>

      <Card
        title="Upload OD Docs"
        subtitle="Upload your documents for OD in this form"
        image={require("../../assets/logo-red.png")}
      ></Card>
    </View>
  );
}

export default DisplayClass;
