import React from "react";
import { ScrollView, View } from "react-native";
import Card from "../component/Card";
function Staff_Portal(props) {
  const { classId } = props.route.params;
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <Card
          title="View Students"
          subtitle="The personal documents of the student can be accessed here."
          image={require("../../assets/logo-red.png")}
          onPress={() => props.navigation.navigate("ListStudents")}
        ></Card>

        <Card
          title="View Documents"
          subtitle="The documents of the students can be accessed here."
          image={require("../../assets/logo-red.png")}
          onPress={() =>
            props.navigation.navigate("ClassroomDocs", { classId })
          }
        ></Card>
      </View>
    </ScrollView>
  );
}

export default Staff_Portal;
