import React, { Component } from "react";
import Card from "../component/Card";
import Personal_Docs from "../screens/PersonalDocs" 
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

  _renderItem = ({ item, index }) => {
    return (
        <View style={styles.item}>
          <Card
          title={item.id}
          onPress={() => navigation.navigate('Personal_Docs')}
        >
        </Card>
        </View>
    );
  };
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
              onPress={() => this.props.navigation.navigate('Personal_Docs')}
              // renderRightActions={() => (
              //   <ListItemDelete onPress={() => handleDelete(item)} />
              // )}
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
