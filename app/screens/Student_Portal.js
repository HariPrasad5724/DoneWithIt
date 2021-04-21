import React from "react";
import { ScrollView, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Card from "../component/Card";
import ReasonODForm from "./ReasonODForm";
import DocumentScreen from "./DocumentScreen";
import DisplayDocs from "./DisplayDocs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Upload" component={ReasonODForm} />
    <Tab.Screen name="DocumentScreen" component={DisplayDocs} />
  </Tab.Navigator>
);

function Student_Portal(props) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fff", margin: 10 }}>
        <Card
          title="Upload Document"
          subtitle="Upload your documents here and make sure You have the document as PDF "
          image={require("../../assets/upload.png")}
          onPress={() => props.navigation.navigate("OD_Form")}
        />
        <Card
          title="Display Personal Docs"
          onPress={() =>
            props.navigation.navigate("DisplayDocs", { category: "PD" })
          }
        />
        <Card
          title="Display OnDuty Docs"
          onPress={() =>
            props.navigation.navigate("DisplayDocs", { category: "OD" })
          }
        />
        <Card
          title="Display Other Docs"
          onPress={() =>
            props.navigation.navigate("DisplayDocs", { category: "OTHERS" })
          }
        />
      </View>
    </ScrollView>
    // <TabNavigator />
  );
}

export default Student_Portal;
