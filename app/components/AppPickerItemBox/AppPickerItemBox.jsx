import React from "react";
import { View, TouchableOpacity } from "react-native";
import AppText from "../AppText";
import styles from "./styles";

function AppPickerItemBox({ label, label2, title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.text}>{label}</AppText>
        <AppText style={styles.text}>{label2}</AppText>
      </View>
    </TouchableOpacity>
  );
}

export default AppPickerItemBox;
