import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import Card from "../component/Card";

function DocumentScreen(props) {
  return (
    <View>
      <Text>Document Screen</Text>
      <Text>Document Screen</Text>
      <Text>Document Screen</Text>
      <Text>Document Screen</Text>
      <Text>Document Screen</Text>
      <Text>Document Screen</Text>
      <Card
        key="1"
        title="Display Personal Docs"
        subtitle="ajksdhkasjh"
        // onPress={() =>
        //   props.navigation.navigate("DisplayDocs", { category: "PD" })
        // }
      />
      <Card
        key="2"
        title="Display OnDuty Docs"
        // onPress={() =>
        //   props.navigation.navigate("DisplayDocs", { category: "OD" })
        // }
      />
      <Card
        key="3"
        title="Display Other Docs"
        // onPress={() =>
        //   props.navigation.navigate("DisplayDocs", { category: "OTHERS" })
        // }
      />
    </View>
  );
}

export default DocumentScreen;

const styles = StyleSheet.create({
    card: {
      width: "100%",
      marginVertical: 5,
      backgroundColor: "dodgerblue",
      overflow: "hidden",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      height: 100,
      width: 100,
      margin: 10,
    },
    subtitle: {
      color: "#fff",
    },
    textContainer: {
      padding: 20,
    },
    title: {
      marginBottom: 5,
      color: "#fff",
      fontWeight: "bold",
      fontSize: 20,
    },
  });