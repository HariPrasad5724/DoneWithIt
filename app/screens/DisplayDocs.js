import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AuthContext from "../auth/context";

import config from "../config/config";
import { create } from "apisauce";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

export default function DisplayDocs({ route }) {
  const { authToken } = useContext(AuthContext);

  const [files, setfiles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const { category } = route.params;
  const api = create({
    baseURL: config["baseUrl"],
    headers: {
      Authorization: "Bearer " + authToken,
    },
  });

  const getData = async () => {
    let temp = [];
    try {
      await api
        .get(config["filesGetEndPoint"])
        .then((response) => {
          temp = [...response.data];
        })
        .catch(console.log);
      setfiles(temp);
    } catch (error) {}

    if (category) {
      const result = [];
      for (let item of temp) {
        if (item["category"] === category) result.push(item);
      }
      setfiles(result);
    }
  };

  const downloadFile = async (file) => {
    const fileUri = `${FileSystem.documentDirectory}${file.filename}`;
    const downloadedFile = await FileSystem.downloadAsync(
      "http://192.168.0.103:5000/File/download/" + file.filename,
      fileUri,
      {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      }
    );
    console.log(fileUri);
    console.log(downloadedFile);
    if (downloadedFile.status != 200) console.log("Something Went Wrong!!!!");
    else saveFileAsync(downloadedFile);
  };

  const saveFileAsync = async (downloadedFile) => {
    const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (perm.status != "granted") {
      return;
    }

    try {
      const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
      const album = await MediaLibrary.getAlbumAsync("Download");
      if (album == null) {
        await MediaLibrary.createAlbumAsync("Download", asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {files.length !== 0 &&
          files.map((file) => (
            <View style={styles.fileContainer} key={file.filename}>
              {file.filename && file.filename ? (
                <Text style={styles.title}>File Name : {file.filename}</Text>
              ) : (
                <Text style={styles.title}>File Name : {file.filepath}</Text>
              )}
              <Text style={styles.title}>Date of Submission : {file.date}</Text>
              <TouchableOpacity onPress={() => downloadFile(file)}>
                <MaterialCommunityIcons
                  name="download-circle"
                  size={40}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fileContainer: {
    width: "100%",
    height: 170,
    backgroundColor: "dodgerblue",
    margin: 5,
    borderRadius: 25,
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
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
});
