import React from "react";
import Card from "../component/Card";
import { ScrollView, View } from "react-native";
function StaffHome(props) {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          margin: 10,
        }}
      >
        <Card
          title="List Classes"
          subtitle="View the list of classes under you"
          onPress={() => props.navigation.navigate("Display_Class")}
        />
        <Card
          title="My Profile"
          subtitle="Your profile details can be accessed here"
          onPress={() => props.navigation.navigate("My_Profile")}
        />
      </View>
    </ScrollView>
  );
}

export default StaffHome;
