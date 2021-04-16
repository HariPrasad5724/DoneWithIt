import React, { Component } from "react";
import Card from "../component/Card";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AppText from "../component/AppText";

export default class ListStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
        console.log(responseJson);
      });
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Card
          title={item.id}
          onPress={() => navigation.navigate("Personal_Docs")}
        ></Card>
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
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => this.props.navigation.navigate("Personal_Docs")}
            >
              <AppText style={styles.title}>{item.id}</AppText>
              {/* <AppText style={styles.subtitle}>{item.register_number}</AppText> */}
            </TouchableOpacity>
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

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "lightgray",
//     padding: 10,
//   },

//   row: {
//     fontSize: 18,
//     padding: 12,
//   },

//   textInput: {
//     textAlign: "center",
//     height: 42,
//     borderWidth: 1,
//     borderColor: "#009688",
//     borderRadius: 8,
//     backgroundColor: "#FFFF",
//     marginTop: 20,
//   },
//   textContainer: {
//     width: 300,
//     height: 100,
//     margin: 10,
//     borderRadius: 20,
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "dodgerblue",
//   },
//   subtitle: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   title: {
//     marginBottom: 5,
//     color: "#fff",
//   },
// });
