import React, { useState } from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

export default function DocumentPickerApp() {
  const [documentDetails, setdocumentDetails] = useState();

  const readDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/*",
      });
      setdocumentDetails(result);
    } catch (error) {
      console.log("Can't open file", error);
    }
  };
  return (
    <View style={{ paddingTop: 10, paddingLeft: 50 }}>
      <TouchableOpacity
        onPress={readDocument}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 5,
          width: 130,
        }}
      >
        <MaterialCommunityIcons name="paperclip" size={28} color="grey" />
        <Text style={{ fontSize: 15 }}>Select Doc</Text>
      </TouchableOpacity>
    </View>
  );
}
