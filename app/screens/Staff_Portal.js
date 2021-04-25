import React from "react";
import { render } from "react-dom";
import { useContext } from "react-native";
import { ScrollView, View } from "react-native";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";
import Card from "../component/Card";

function Staff_Portal(props) {
  const { class_id } = props.route.params;
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
          title="View Students"
          subtitle="The student details can be accessed here."
          onPress={() =>
            props.navigation.navigate("ListStudents", { class_id })
          }
        />

        <Card
          title="View Documents"
          subtitle="The documents of the students can be accessed here."
          onPress={() => props.navigation.navigate("DisplayDocs")}
        />
      </View>
    </ScrollView>
  );
}

export default Staff_Portal;
