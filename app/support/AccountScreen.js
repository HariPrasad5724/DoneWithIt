import React from "react";
import Card from "../component/Card";
import { StyleSheet, View, FlatList } from "react-native";
import Icon from "../component/icon";
import ListItemSeperator from "../component/ListItemSeperator";
const AccountDetails = [
  {
    title: "My Documents",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "white",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "white",
    },
  },
];
function AccountScreen(props) {
  return (
    <View>
      <View style={styles.container}>
        <Card
          title="Hari"
          subtitle="hari@gmail.com"
          image="../../assets/icon.png"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={AccountDetails}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={"..."}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            ></Card>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
  },
  container: {
    marginVertical: 30,
  },
});

export default AccountScreen;
