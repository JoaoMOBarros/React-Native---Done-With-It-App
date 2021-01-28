import React from "react";
import { View, TouchableOpacity } from "react-native";
import AppText from "../AppText";
import styles from "./styles";

function AppPickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

export default AppPickerItem;
