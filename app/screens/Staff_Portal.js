import React from "react";
import { ScrollView, View } from "react-native";
import Card from "../component/Card";

function Staff_Portal(props) {
  const { classId } = props.route.params;
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fff", flex: 1, margin: 10 }}>
        <Card
          title="View Students"
          subtitle="The student details can be accessed here."
          onPress={() => props.navigation.navigate("ListStudents")}
        />

        <Card
          title="View Documents"
          subtitle="The documents of the students can be accessed here."
          onPress={() => props.navigation.navigate("DisplayDocs", { classId })}
        />
      </View>
    </ScrollView>
  );
}

export default Staff_Portal;
