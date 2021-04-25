import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import AppButton from "./AppButton";
import AppText from "./AppText";
import color from "../config/colors";

function AppDatePicker({ dateTitle, timeTitle, setDateTime }) {
  const [date, setDate] = useState(Date.now());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [value, setvalue] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log();

    const dateArray = String(currentDate).split(" ");
    const timeArray = dateArray[4].split(":");

    setvalue(formatDate(currentDate));
    setDateTime(formatDate(currentDate));
  };

  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => showMode("date");

  const showTimepicker = () => showMode("time");

  return (
    <>
      <View style={styles.container}>
        <AppButton
          onPress={showDatepicker}
          title="Date"
          style={styles.button}
          icon="calendar"
          color={color.dark}
        />
        <AppText style={styles.text}>{value}</AppText>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
}

export default AppDatePicker;

const styles = StyleSheet.create({
  text: {
    height: 60,
    fontSize: 20,
    width: 250,
    paddingVertical: 12,
    backgroundColor: color.light,
    borderRadius: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    height: 200,
  },
  button: {
    margin: 0,
    width: 100,
    marginRight: 5,
  },
});
