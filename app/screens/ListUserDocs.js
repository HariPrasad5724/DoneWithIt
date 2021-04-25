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

export default function ListUserDocs(props) {
  const [files, setfiles] = useState([]);
  const [searchWord, setsearchWord] = useState("");
  const [category, setCategory] = useState();
  const [filteredFiles, setFilteredFiles] = useState([]);
  const { class_id, student_id } = props.route.params;
  console.log({ class_id, student_id });
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
      if (student_id) {
        const result = await FileApi.getStudentFiles(class_id, student_id);
        setfiles(result.data);
        setFilteredFiles(result.data);
        console.log(result);
      } else {
        const result = await FileApi.getFiles();
        setfiles(result.data);
        setFilteredFiles(result.data);
      }
    } catch (error) {
      Alert.alert("Error getting files from server!!!");
      console.log(error);
    }
  };

  const downloadFile = async (file) => {
    const downloadedFile = await FileApi.downloadFile(file);
    if (downloadedFile.status != 200) Alert.alert("Something Went Wrong!!!!");
    else {
      const result = await FileApi.saveFileAsync(downloadedFile);
      if (result) return Alert.alert("File downloaded successfully!!");
      Alert.alert("File downloaded unsuccessful!!");
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
              <View
                style={{
                  height: 70,
                  margin: 5,
                  width: 250,
                }}
              >
                <Text style={styles.title} numberOfLines={1}>
                  {item.filename.toUpperCase()}
                </Text>
                <Text style={styles.title}>{item.date}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  height: 50,
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity onPress={() => downloadFile(item)}>
                  <MaterialCommunityIcons
                    name="download-circle"
                    size={50}
                    color="#52b788"
                  />
                </TouchableOpacity>
              </View>
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
    backgroundColor: "#343a40",
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f8f9fa",
    margin: 3,
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
