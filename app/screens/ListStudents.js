import React, { Component, useContext, useEffect, useState } from "react";
import Card from "../component/Card";
import { Text, FlatList, View, StyleSheet } from "react-native";

import config from "../config/config";
import { create } from "apisauce";

function ListStudents(props) {
  const [users, setusers] = useState([]);

  // const { user } = useContext(AuthContext);

  const api = create({
    baseURL: config["baseUrl"],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let temp = [];

    try {
      await api
        .get(config["userEndPoint"])
        .then((response) => {
          temp = [...response.data];
          console.log(response.data);
        })
        .catch(console.log);
    } catch (error) {}

    setusers(temp);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Students</Text>
      {users && (
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <Card
              title={"Name : " + item.Name}
              subtitle={"Register No : " + item.RegisterNo}
              // onPress={() => props.navigation.navigate("DisplayDocs")}
            />
          )}
          keyExtractor={(message) => message._id}
        />
      )}
    </View>
  );
}

export default ListStudents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  title: {
    marginBottom: 5,
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
});
