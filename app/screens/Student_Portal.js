import React, { useContext } from "react";
import { ScrollView, View } from "react-native";
import AuthContext from "../auth/context";
import Card from "../component/Card";

function Student_Portal(props) {
  const { user } = useContext(AuthContext);

  return (
    <ScrollView>
      <View style={{ backgroundColor: "tomato" }}>
        <Card
          title="Upload Personal Documents"
          subtitle="Upload your personal documents like Birth certificates, MarkSheets , Government Documents and other personal documents here.."
          image={require("../../assets/logo-red.png")}
          onPress={() => props.navigation.navigate("Personal_Docs")}
        ></Card>

        <Card
          title="Upload OD Docs"
          subtitle="Upload your documents for OD here and make sure You have the document as PDF "
          image={require("../../assets/logo-red.png")}
          onPress={() => props.navigation.navigate("OD_Form")}
        ></Card>
        <Card
          title="Display Docs"
          // subtitle="Upload your documents for OD here and make sure You have the document as PDF "
          image={require("../../assets/logo-red.png")}
          onPress={() => props.navigation.navigate("DisplayDocs")}
        ></Card>
      </View>
    </ScrollView>
  );
}

export default Student_Portal;
