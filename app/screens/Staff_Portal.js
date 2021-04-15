import React from "react";
import { ScrollView, View } from "react-native";
import Card from "../component/Card";
function Staff_Portal(props) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "tomato" }}>
        <Card
          title="View Students"
          subtitle="The personal documents of the student can be accessed here"
          image={require("../../assets/logo-red.png")}
          onPress={() => props.navigation.navigate("ListStudents")}
        ></Card>

        <Card
          title="Search Student"
          subtitle="Students OD Docs can be searched based on their Reg no and Date wise"
          image={require("../../assets/logo-red.png")}
          onPress={() => props.navigation.navigate("Search_Student")}
        ></Card>
      </View>
    </ScrollView>
  );
}

export default Staff_Portal;
