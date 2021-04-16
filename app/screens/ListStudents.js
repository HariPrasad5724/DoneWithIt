import React, { Component } from "react";
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
    fetch(
      "http://jsonplaceholder.typicode.com/posts"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      });
  }

  render() {
    let { container } = styles;
    let { dataSource, isLoading } = this.state;
    return (
      <View style={container}>
        <FlatList
          data={dataSource}
          //renderItem={this._renderItem}
          renderItem={({ item }) => (
            <Card
              title={item.id}
              onPress={() => this.props.navigation.navigate('DisplayDocs',{id:item.id})}
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
});
