import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FileApi from "../services/FileService";
import AppTextInput from "../component/AppTextInput";

export default function DisplayDocs({ route }) {
  const [files, setfiles] = useState([]);
  const [searchWord, setsearchWord] = useState("");
  const [filteredFiles, setFilteredFiles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleOnChange = (text) => {
    setsearchWord(text);
    if (text) {
      const filteredFiles = files.filter((item) => {
        if (item.filename)
          return item.filename.toLowerCase().includes(text.toLowerCase());
      });
      setFilteredFiles(filteredFiles);
    } else setFilteredFiles(files);
  };

  const getData = async () => {
    let temp = [];
    const routeParams = route.params;

    try {
      if (routeParams.classId) {
        const result = await FileApi.getClassroomFiles(routeParams.classId);
        temp = [...result.data];
        setfiles(temp);
        setFilteredFiles(temp);
      } else {
        const result = await FileApi.getFiles();
        temp = [...result.data];
        setfiles(result.data);
      }
    } catch (error) {
      Alert.alert("Error geting files from server!!!");
    }

    if (routeParams.category) {
      const result = [];
      for (let item of temp) {
        if (item["category"] === routeParams.category) result.push(item);
      }
      setfiles(result);
      setFilteredFiles(result);
    }
  };

  const downloadFile = async (file) => {
    const downloadedFile = await FileApi.downloadFile(file);
    if (downloadedFile.status != 200) Alert.alert("Something Went Wrong!!!!");
    else {
      const result = await FileApi.saveFileAsync(downloadedFile);
      if (result) return Alert.alert("File downloaded sucessfully!!");
      Alert.alert("File downloaded unsucessful!!");
    }
  };

  return (
    <View style={{ backgroundColor: "lightgray", padding: 5, flex: 1 }}>
      <AppTextInput
        placeholder="Search"
        onChangeText={(e) => handleOnChange(e)}
        value={searchWord}
        icon="file-search-outline"
      />
      {filteredFiles.length === 0 ? (
        <Text style={styles.text}>No Files are there</Text>
      ) : (
        <>
          <FlatList
            style={styles.container}
            data={filteredFiles}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.fileContainer} key={item.filename}>
                <Text style={styles.title}>File Name : {item.filename}</Text>
                <Text style={styles.title}>
                  Date of Submission : {item.date}
                </Text>
                <TouchableOpacity onPress={() => downloadFile(item)}>
                  <MaterialCommunityIcons
                    name="download-circle"
                    size={40}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  fileContainer: {
    width: "100%",
    height: 170,
    backgroundColor: "dodgerblue",
    marginVertical: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    margin: 3,
  },
  container: {
    margin: 5,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    top: 50,
    color: "gray",
  },
});
