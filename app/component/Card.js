import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import color from "../config/colors";

export default function Card({ title, subtitle, image, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, style]}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    margin: 20,
    backgroundColor: "dodgerblue",
    borderRadius: 15,
    overflow: "hidden",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  subtitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 5,
    color: "#fff",
  },
});
