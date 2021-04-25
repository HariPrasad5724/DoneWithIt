import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";

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
    width: "100%",
    marginVertical: 5,
    backgroundColor: "dodgerblue",
    overflow: "hidden",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  image: {
    height: 100,
    width: 100,
    margin: 10,
  },
  subtitle: {
    color: "#fff",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 5,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
