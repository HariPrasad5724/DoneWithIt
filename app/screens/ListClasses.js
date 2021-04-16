import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Card from "../component/Card";
import ListItemDelete from "../component/ListItemDelete";
import ListItemSeperator from "../component/ListItemSeperator";

const classData = [
  {
    id: "1",
    subtitle: "Priya N , TN Sugumar, V Shanthi",
    title: "18MSS-MSC SOFTWARE SYSTEMS",
    navigate: "Staff_Portal",
    image: require("../../assets/logo-red.png"),
  },
  {
    id: "2",
    subtitle: "Sudha Devi , Sujithra",
    title: "18MDS- MSC DATA SCIENCE",
    navigate: "Staff_Portal",
    image: require("../../assets/logo-red.png"),
  },
  {
    id: "3",
    subtitle: "Umarani, VijayaRangam",
    title: "18MDCS- MSC DECISION AND COMPUTING SYSTEMS",
    navigate: "Staff_Portal",
    image: require("../../assets/logo-red.png"),
  },
];
function ListClasses(props) {
  const [newClassData, setClassData] = useState(classData);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (selectedClass) => {
    setClassData(
      newClassData.filter((allClass) => allClass.id !== selectedClass.id)
    );
  };
  return (
    <View styles={{ backgroundColor: "royalblue" }}>
      <FlatList
        data={newClassData}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            onPress={() => props.navigation.navigate(item.navigate)}
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
    </View>
  );
}

export default ListClasses;
