import React, { useEffect, useState, useContext } from "react";
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
import ChooseCategory from "./ChooseCategory";
import classroomContext from "../context/classroomContext";

export default function DisplayDocs({ route }) {
  const [files, setfiles] = useState([]);
  const [searchWord, setsearchWord] = useState("");
  const [category, setCategory] = useState();
  const [filteredFiles, setFilteredFiles] = useState([]);
  const { selectedClass } = useContext(classroomContext);

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

  const onSelectItem = (item) => {
    setCategory(item);
    if (item) {
      const result = files.filter((file) => file.category === item.value);
      setFilteredFiles(result);
    } else setFilteredFiles(files);
  };

  const getData = async () => {
    try {
      if (selectedClass) {
        const result = await FileApi.getClassroomFiles(selectedClass);
        setfiles(result.data);
        setFilteredFiles(result.data);
      } else {
        const result = await FileApi.getFiles();
        setfiles(result.data);
        setFilteredFiles(result.data);
      }
    } catch (error) {
      Alert.alert("Error geting files from server!!!");
      console.log(error);
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
    <View style={{ padding: 5, flex: 1 }}>
      {/* <ChooseCategory selectedItem={category} onSelectItem={onSelectItem} /> */}
      <AppTextInput
        placeholder="Search"
        onChangeText={(e) => handleOnChange(e)}
        value={searchWord}
        icon="file-search-outline"
      />
      {filteredFiles.length === 0 ? (
        <Text style={styles.text}>No Files are there</Text>
      ) : (
        <FlatList
          style={styles.container}
          data={filteredFiles}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.fileContainer} key={item.filename}>
              <View style={{ padding: 15, width: 250 }}>
                <Text style={styles.title}> {item.filename}</Text>
                <Text style={styles.title}>{item.date}</Text>
              </View>
              <TouchableOpacity
                onPress={() => downloadFile(item)}
                style={{ left: -5 }}
              >
                <MaterialCommunityIcons
                  name="download-circle"
                  size={50}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  fileContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "dodgerblue",
    marginVertical: 5,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    margin: 3,
    height: 65,
  },
  container: {
    margin: 2,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    top: 50,
    color: "gray",
  },
});
