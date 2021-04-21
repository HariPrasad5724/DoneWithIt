import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

import AppButton from "../component/AppButton";
import AppPicker from "../component/AppPicker";
import AppText from "../component/AppText";
import AppDatePicker from "../component/AppDatePicker";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import ActivityIndicator from "../component/ActivityIndicator";
import FileService from "../services/FileService";

const categories = [
  {
    id: 1,
    label: "Personal Documents",
    value: "PD",
  },
  {
    id: 2,
    label: "On Duty",
    value: "OD",
  },
  {
    id: 3,
    label: "Others",
    value: "OTHERS",
  },
];

function ReasonODForm(props) {
  const [category, setCategory] = useState(categories[0]);
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
    if (date === undefined) {
      Alert.alert("Select Date Field!!!!");
    } else if (
      documentDetails === undefined ||
      documentDetails["type"] === "cancel"
    ) {
      Alert.alert("Select A Document to upload !!!");
    } else {
      const fileName = documentDetails["name"].split(".")[0];
      console.log(fileName);
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
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="Reason for Leave"
        icon="apps"
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
            color="white"
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
    backgroundColor: "lightgray",
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
    height: 70,
    backgroundColor: "dodgerblue",
  },
  docContainer: {
    width: "95%",
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    flex: 0.2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    flexDirection: "row",
    overflow: "hidden",
  },
});
export default ReasonODForm;
