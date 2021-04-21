import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Card from "../component/Card";
import userApi from "../services/usersApi";
import AppTextInput from "../component/AppTextInput";

function ListStudents(props) {
  const [users, setusers] = useState([]);
  const [searchWord, setsearchWord] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleOnChange = (student) => {
    setsearchWord(student);
    if (student) {
      const result = users.filter((user) =>
        user.Name.toLowerCase().includes(student.toLowerCase())
      );
      setFilteredUsers(result);
    } else setFilteredUsers(users);
  };

  const getData = async () => {
    try {
      let temp = [];
      const result = await userApi.getUsers();
      temp = [...result.data];
      setFilteredUsers(temp);
      setusers(temp);
    } catch (error) {
      console.log("Error getting students list ", error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Students</Text>
      <AppTextInput
        placeholder="Search"
        onChangeText={(e) => handleOnChange(e)}
        value={searchWord}
        icon="account-search-outline"
      />
      {filteredUsers.length === 0 ? (
        <Text style={styles.text}>No students are there</Text>
      ) : (
        <FlatList
          data={filteredUsers}
          renderItem={({ item }) =>
            !item.isStaff && (
              <Card
                title={"Name : " + item.Name}
                subtitle={"Register No : " + item.RegisterNo}
              />
            )
          }
          keyExtractor={(message) => message._id}
        />
      )}
    </View>
  );
}

export default ListStudents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightgray",
    padding: 10,
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  title: {
    marginBottom: 5,
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    top: 50,
    color: "gray",
  },
});
