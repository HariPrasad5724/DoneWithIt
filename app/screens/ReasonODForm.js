import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

import AppButton from "../component/AppButton";
import AppPicker from "../component/AppPicker";
import AuthContext from "../auth/context";
import AppText from "../component/AppText";
import AppDatePicker from "../component/AppDatePicker";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";

import config from "../config/config";
import { create } from "apisauce";
import { FileSystemUploadType } from "expo-file-system";

function ReasonODForm(props) {
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

  const [category, setCategory] = useState(categories[0]);
  const [date, setdate] = useState();
  const [documentDetails, setdocumentDetails] = useState();

  const { authToken } = useContext(AuthContext);

  const readDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });
      setdocumentDetails(result);
    } catch (error) {
      console.log("Can't open file", error);
    }
  };

  const handleSubmit = async () => {
    console.log(date);
    console.log(category);
    console.log(documentDetails);

    const result = await FileSystem.uploadAsync(
      config["baseUrl"] + config["fileUploadEndPoint"],
      documentDetails["uri"],
      {
        headers: {
          Authorization: "Bearer " + authToken,
          "content-type": "multipart/form-data",
        },
        fieldName: "file",
        uploadType: FileSystemUploadType.MULTIPART,
        parameters: {
          category: category["value"],
          date: date,
        },
      }
    );

    console.log(result);

    if (result.status === 200) {
      Alert.alert("File Upload Sucessful!!!!");
      (() => props.navigation.navigate("Student_Portal"))();
    } else Alert.alert("Try Again Later!!!");
  };

  return (
    <View style={styles.container}>
      <View>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          items={categories}
          placeholder="Reason for Leave"
          icon="apps"
        />
      </View>

      <AppDatePicker setDateTime={setdate} />
      <TouchableOpacity onPress={readDocument} style={styles.addButton}>
        <MaterialCommunityIcons name="paperclip" size={28} color="white" />
        <AppText style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
          Add
        </AppText>
      </TouchableOpacity>

      {documentDetails && (
        <View style={styles.docContainer}>
          <Text style={{ width: 200, fontSize: 16, color: "white" }}>
            {documentDetails.name}
          </Text>
          <MaterialCommunityIcons
            onPress={() => setdocumentDetails(null)}
            name="close"
            size={30}
            color="white"
          />
        </View>
      )}

      <AppButton
        onPress={handleSubmit}
        title={"Submit Docs"}
        color="dodgerblue"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#3b5998",
    flex: 1,
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
