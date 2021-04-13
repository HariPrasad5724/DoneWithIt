import React, { useState } from "react";
import { View } from "react-native";
import AppPicker from "../component/AppPicker";
export default function ChooseCategory() {
  const categories = [
    {
      label: "Medical Leave",
      value: 1,
    },
    {
      label: "College event Leave",
      value: 2,
    },
    {
      label: "Placement Leave",
      value: 3,
    },
    {
      label: "Hackathon Participation Leave",
      value: 4,
    },
    {
      label: "Other Leave",
      value: 5,
    },
  ];
  const [category, setCategory] = useState(categories[0]);
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
