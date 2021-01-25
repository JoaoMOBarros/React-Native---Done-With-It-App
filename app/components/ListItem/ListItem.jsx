import React from "react";
import { Image, View } from "react-native";
import AppText from "../AppText";
import styles from "./styles";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.outerContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListItem;
