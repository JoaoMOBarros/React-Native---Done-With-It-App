import React from "react";
import { Image, View, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import styles from "./styles";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.outerContainer}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.infoContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;
