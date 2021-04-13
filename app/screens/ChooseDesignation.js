import React, { useState } from "react";
import { View } from "react-native";
import AppPicker from "../component/AppPicker";
export default function ChooseDesignation() {
  const categories = [
    {
      label: "Tutor",
      value: 1,
    },
    {
      label: "HOD",
      value: 2,
    },
  ];
  const [category, setCategory] = useState(categories[0]);
  return (
    <View>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="Select Designation"
        icon="apps"
      />
    </View>
  );
}
