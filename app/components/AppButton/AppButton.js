import React from "react";
import { Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";
import styles from "./styles";

function AppButton({ title, onPress, style, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
