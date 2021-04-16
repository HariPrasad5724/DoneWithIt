import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getStudents } from "../api/fakeStudentApi";
import Card from "../component/Card";
import AppText from "../component/AppText";
import AppTextInput from "../component/AppTextInput";
export default class SearchStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      roll_no: "",
      document_name: "",
      date_of_sub: "",
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

  searchDataWithRoll(roll_no) {
    const newData = this.arrayholder.filter((item) => {
      const itemRoll = item.register_number.toString();
      const textRoll = roll_no.toString();
      const student = itemRoll.indexOf(textRoll) > -1;
      return student;
    });

    this.setState({
      data: newData,
      roll_no,
    });
  }

  /* searchDataWithDateOfSubmission(date_of_sub) {
    const newData = this.arrayholder.filter((item) => {
      const itemDocs = item.date_of_sub.toString();
      const textDocs = date_of_sub.toString();
      const students = itemDocs.indexOf(textDocs) > -1;
      return students;
    });

    this.setState({
      data: newData,
      document_name,
    });
  }*/

  searchDataWithDocname(document_name) {
    const newData = this.arrayholder.filter((item) => {
      const itemDocs = item.document_name;
      const textDocs = document_name.toString();
      const students = itemDocs.indexOf(textDocs) > -1;
      return students;
    });

    this.setState({
      data: newData,
      document_name,
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
        <AppTextInput
          keyboardType="number-pad"
          onChangeText={(roll_no) => this.searchDataWithRoll(roll_no)}
          value={this.state.roll_no}
          underlineColorAndroid="transparent"
          placeholder="Enter the Roll no of the Student"
        />
        <AppTextInput
          onChangeText={(document_name) =>
            this.searchDataWithDocname(document_name)
          }
          value={this.state.document_name}
          underlineColorAndroid="transparent"
          placeholder="Enter the Document Name"
        />

        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => console.log("Clicked ", item.name)}
            >
              <AppText style={styles.title}>{item.name}</AppText>
              <AppText style={styles.subtitle}>{item.register_number}</AppText>
            </TouchableOpacity>
          )}
          style={{ marginTop: 10 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    padding: 10,
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
    marginTop: 20,
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
