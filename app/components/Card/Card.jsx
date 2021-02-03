import React from "react";
import { Image, View, TouchableWithoutFeedback } from "react-native";
import AppText from "../AppText";
import styles from "./styles";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.container}>
          <AppText style={styles.title} numberOfLines={2}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;
