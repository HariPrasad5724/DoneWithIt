import React, { useContext } from "react";
import { ScrollView, View } from "react-native";
import AuthContext from "../auth/context";
import Card from "../component/Card";

function Student_Portal(props) {
  const { user } = useContext(AuthContext);

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fff" }}>
        <Card
          title="Upload Document"
          subtitle="Upload your documents here and make sure You have the document as PDF "
          image={require("../../assets/logo-red.png")}
          onPress={() => props.navigation.navigate("OD_Form")}
        ></Card>
        <Card
          title="Display Personal Docs"
          image={require("../../assets/logo-red.png")}
          onPress={() =>
            props.navigation.navigate("DisplayDocs", { category: "PD" })
          }
        ></Card>

        <Card
          title="Display OnDuty Docs"
          image={require("../../assets/logo-red.png")}
          onPress={() =>
            props.navigation.navigate("DisplayDocs", { category: "OD" })
          }
        ></Card>
      </View>
    </ScrollView>
  );
}

export default Student_Portal;
