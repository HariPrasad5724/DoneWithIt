import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../components/AppText";
import colors from "../config/colors";

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.listingContainer}>
          {IconComponent}
          {image && <Image style={styles.listingImage} source={image} />}
          <View style={styles.listTextContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  listingContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  listingImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  listTextContainer: {
    padding: 10,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 15,
    textTransform: "capitalize",
    color: colors.grey,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
