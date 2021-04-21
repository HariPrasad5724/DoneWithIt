import React, { useState } from "react";
import { View } from "react-native";
import AppPicker from "../component/AppPicker";

export default function ChooseCategory({ onSelectItem, selectedItem }) {
  const categories = [
    {
      id: 1,
      label: "Personal Document",
      value: "PD",
    },
    {
      id: 2,
      label: "On Duty Document",
      value: "OD",
    },
    {
      id: 3,
      label: "Others Document",
      value: "OTHERS",
    },
  ];
  const [category, setCategory] = useState(categories[3]);

  const handleSelect = (id) => {
    console.log(id);
  };
  return (
    <View>
      <AppPicker
        selectedItem={selectedItem}
        onSelectItem={onSelectItem}
        items={categories}
        placeholder="Category"
        icon="apps"
      />
    </View>
  );
}
