import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ListItemDelete(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{
          backgroundColor: "red",
          width: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          color="white"
        ></MaterialCommunityIcons>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDelete;
