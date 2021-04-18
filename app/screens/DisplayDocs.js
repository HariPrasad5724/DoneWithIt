import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import AuthContext from "../auth/context";
import Card from "../component/Card";

import config from "../config/config";
import { create } from "apisauce";

export default function DisplayDocs({ route }) {
  const { user, authToken } = useContext(AuthContext);

  const [files, setfiles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

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

    // console.log(temp);

    // return temp;
  };

  return (
    <View style={styles.container}>
      {files &&
        files.map((file) => (
          <View style={styles.fileContainer}>
            {file.filename && file.filename ? (
              <Text style={styles.title}>File Name : {file.filename}</Text>
            ) : (
              <Text style={styles.title}>File Name : {file.filepath}</Text>
            )}
            {/* <Text style={styles.title}>{file.category}</Text> */}
            <Text style={styles.title}>Date of Submission : {file.date}</Text>
            {/* <Card key={file._id} title={file.filename} subtitle={file.date} /> */}
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  fileContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "dodgerblue",
    margin: 5,
    borderRadius: 25,
    padding: 10,
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
