import React, { Component, useContext } from "react";
import Card from "../component/Card";
import { Text, FlatList, View, StyleSheet } from "react-native";

export default class ListStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  
  componentDidMount() {
    fetch("http://192.168.0.102:5000/user")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
        console.log(responseJson);
      })
      .catch(console.log);
  }

  render() {
    let { container } = styles;
    let { dataSource, isLoading } = this.state;
    return (
      <View style={container}>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <Card
              title={item.id}
              onPress={() =>
                this.props.navigation.navigate("DisplayDocs", { id: item.id })
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10,
    paddingTop: 50,
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  textContainer: {
    width: 300,
    height: 100,
    margin: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  subtitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 5,
    color: "#fff",
  },
});
