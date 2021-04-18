import React, { useState } from "react";
import { View } from "react-native";
import AppPicker from "../component/AppPicker";

export default function ChooseCategory({ onSelectItem, selectedItem }) {
  const categories = [
    {
      id: 1,
      label: "Personal Documents",
      value: "PD",
    },
    {
      id: 2,
      label: "On Duty",
      value: "OD",
    },
    {
      id: 3,
      label: "Others",
      value: "OTHERS",
    },
  ];
  const [category, setCategory] = useState(categories[0]);

  const handleSelect = (id) => {
    console.log(id);
  };
  return (
    <View>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="Reason for Leave"
        icon="apps"
      />
    </View>
  );
}
