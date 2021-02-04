import React from "react";
import { Image, View, TouchableWithoutFeedback } from "react-native";
import AppText from "../AppText";
import styles from "./styles";

function Card({ title, subTitle, subTitle2, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.container}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </AppText>
          {subTitle2 && (
            <AppText style={styles.subTitle} numberOfLines={1}>
              {subTitle2}
            </AppText>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;
