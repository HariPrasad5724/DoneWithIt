import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageComponent,
} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
function Card(props) {
  return (
    <Swipeable renderRightActions={props.renderRightActions}>
      <TouchableHighlight underlayColor="black" onPress={props.onPress}>
        <View style={styles.card}>
          {props.IconComponent}
          {props.image && <Image style={styles.image} source={props.image} />}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title} title={props.title} />
            {props.subtitle && <AppText style={styles.subtitle} title={props.subtitle} />}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    marginTop: 20,
    paddingTop: 30,
    overflow: "hidden",

  },
  image: {
    width: "40%",
    height: 130,
    alignSelf: "center",
  },
  detailsContainer: {
    paddingTop: 20,
    padding: 15,
    paddingLeft: 40,
  },
  subtitle: {
    color: "blue",
    fontWeight: "bold",
    paddingLeft: 30,
  },
  title: {
    marginBottom: 7,
    color: "black",
    fontSize: 18,
    paddingLeft: 30,
  },
});

export default Card;
