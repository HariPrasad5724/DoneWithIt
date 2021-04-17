import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useContext } from "react";

import AuthContext from "../auth/context";
import Card from "../component/Card";
import ListItemDelete from "../component/ListItemDelete";
import ListItemSeperator from "../component/ListItemSeperator";
import config from "../config/config";
import { create } from "apisauce";
import axios from "axios";

function ListClasses(props) {
  const [classData, setClassData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useContext(AuthContext);

  const api = create({
    baseURL: config["baseUrl"],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let temp = [];

    try {
      for (let c of user["Classroom"]) {
        await api
          .get(config["classRoomEndPoint"] + "/" + c)
          .then((response) => {
            temp.push(response.data);
          })
          .catch(console.log);
      }
    } catch (error) {}

    setClassData(temp);
  };

  return (
    <View styles={{ backgroundColor: "royalblue" }}>
      {classData && (
        <FlatList
          data={classData}
          keyExtractor={(message) => message._id}
          renderItem={({ item }) => (
            <Card
              key={item._id}
              title={item.Name}
              subtitle={item.Batch}
              image={item.image}
              onPress={() => props.navigation.navigate("Staff_Portal")}
              renderRightActions={() => (
                <ListItemDelete onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
          refreshing={refreshing}
          onRefresh={() => {
            setClassData(classData);
          }}
        />
      )}
    </View>
  );
}

export default ListClasses;
