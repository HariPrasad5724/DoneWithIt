import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useContext } from "react";

import AuthContext from "../auth/context";
import Card from "../component/Card";
import classroomContext from "../context/classroomContext";
import ListItemDelete from "../component/ListItemDelete";
import ListItemSeperator from "../component/ListItemSeperator";
import classroomApi from "../services/classroomApi";

function ListClasses(props) {
  const [classData, setClassData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useContext(AuthContext);
  const { setSelectedClass } = useContext(classroomContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let temp = [];
      for (let c of user["Classrooms"]) {
        const result = await classroomApi.getClassroom(c);
        temp.push(result.data);
      }
      setClassData(temp);
    } catch (error) {
      console.log("Error in getting classrooms", error);
    }
  };

  return (
    <>
      <View>
        {classData && (
          <FlatList
            style={{ margin: 10 }}
            data={classData}
            keyExtractor={(message) => message._id}
            renderItem={({ item }) => (
              <Card
                key={item._id}
                title={"Class Name : " + item.Name}
                subtitle={"Batch : " + item.Batch}
                image={item.image}
                onPress={() => {
                  setSelectedClass(item._id);
                  console.log(item._id);
                  props.navigation.navigate("Staff_Portal", {
                    class_id: item._id,
                  });
                }}
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
    </>
  );
}

export default ListClasses;
