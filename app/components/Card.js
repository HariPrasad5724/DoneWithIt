import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "./AppText";
import color from '../config/colors';

export default function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
      color:color.secondary,
      fontWeight:"bold"
  },
  textContainer: {
    padding: 20,
  },
  title: {
      marginBottom:5
  },
});
