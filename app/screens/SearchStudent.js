import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import { getStudents } from "../api/fakeStudentApi";
import Card from "../component/Card";
export default class SearchStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      text: "",
      data: getStudents(),
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    return this.setState(
      {
        isLoading: false,
        data: getStudents(),
      },
      () => {
        this.arrayholder = this.state.data;
      }
    );
  }

  searchData(text) {
    const newData = this.arrayholder.filter((item) => {
      const itemRoll = item.register_number.toString();
      const textRoll = text.toString();
      return itemRoll.indexOf(textRoll) > -1;
    });

    this.setState({
      data: newData,
      text,
    });
  }

  itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.searchData(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Enter the Roll no of the Student"
        />

        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => (
            <Card
              title={item.register_number}
              subtitle={item.name}
              onPress={() => console.log("Clicked ", item.name)}
            />
          )}
          style={{ marginTop: 10 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
  },

  row: {
    fontSize: 18,
    padding: 12,
  },

  textInput: {
    textAlign: "center",
    height: 42,
    borderWidth: 1,
    borderColor: "#009688",
    borderRadius: 8,
    backgroundColor: "#FFFF",
  },
});
