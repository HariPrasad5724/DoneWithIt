import React from "react";
import { ScrollView, View, Image } from "react-native";

import Card from "../component/Card";

function Student_Portal(props) {
  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <View>
        <Image
          style={{ width: 100, height: 100, margin: 10, alignSelf: "center" }}
          source={require("../../assets/logo-red.png")}
        />
        <Card
          title="Personal Documents"
          subtitle="Your personal documents like Birth certificates, MarkSheets , Government Documents and other personal documents here.."
          onPress={() => props.navigation.navigate("Personal_Docs")}
        />
        <Card
          title="Other Documents"
          subtitle="Documents other than personal documents"
          onPress={() => props.navigation.navigate("Personal_Docs")}
        />

        <Card
          title="Upload Documents"
          subtitle="Upload your documents for OD here and make sure You have the document as PDF "
          onPress={() => props.navigation.navigate("OD_Form")}
        />
      </View>
    </ScrollView>
  );
}

export default Student_Portal;
