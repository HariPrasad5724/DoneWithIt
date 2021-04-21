import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

import AppButton from "../component/AppButton";
import AppText from "../component/AppText";
import AppDatePicker from "../component/AppDatePicker";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import ActivityIndicator from "../component/ActivityIndicator";
import FileService from "../services/FileService";
import ChooseCategory from "./ChooseCategory";

function ReasonODForm(props) {
  const [category, setCategory] = useState();
  const [date, setdate] = useState();
  const [documentDetails, setdocumentDetails] = useState();
  const [loading, setloading] = useState(false);

  const readDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/*",
        copyToCacheDirectory: true,
      });
      setdocumentDetails(result);
    } catch (error) {
      Alert.alert("Can't open file");
    }
  };

  const handleSubmit = async () => {
    console.log(documentDetails);
    if (category === undefined) return Alert.alert("Select Category Field!!!!");
    if (date === undefined) return Alert.alert("Select Date Field!!!!");
    if (documentDetails === undefined || documentDetails["type"] === "cancel")
      return Alert.alert("Select A Document to upload !!!");
    else {
      const fileName = documentDetails["name"].split(".")[0];
      try {
        const result = await FileService.uploadFile(
          documentDetails["uri"],
          category["value"],
          date,
          fileName
        );
        if (result) {
          Alert.alert("File Upload Sucessful!!!!");
          props.navigation.navigate("Student_Portal");
        } else Alert.alert("Try Again Later!!!");
      } catch (error) {
        console.log("Upload Failed", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator visible={loading} />

      <ChooseCategory
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />

      <AppDatePicker setDateTime={setdate} />
      <TouchableOpacity onPress={readDocument} style={styles.addButton}>
        <MaterialCommunityIcons name="paperclip" size={28} color="white" />
        <AppText style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
          Add
        </AppText>
      </TouchableOpacity>

      {documentDetails && (
        <View style={styles.docContainer}>
          <Text style={{ width: 200, fontSize: 16, color: "black" }}>
            {documentDetails.name}
          </Text>
          <MaterialCommunityIcons
            onPress={() => setdocumentDetails(undefined)}
            name="close"
            size={30}
            color="black"
          />
        </View>
      )}

      <AppButton
        onPress={handleSubmit}
        title={"Submit Document"}
        color="dodgerblue"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    height: 60,
    backgroundColor: "dodgerblue",
  },
  docContainer: {
    width: "95%",
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    flex: 0.2,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    flexDirection: "row",
    overflow: "hidden",
  },
});
export default ReasonODForm;
