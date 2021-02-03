import React from "react";
import styles from "./styles";
import AppText from "../../AppText";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function ErrorMessage({ error, visible, type = 1 }) {
  if (!visible || !error) return null;
  else if (type === 2)
    return (
      <View style={styles.container}>
        <MaterialIcons
          style={styles.icon}
          name="error-outline"
          size={24}
          color="black"
        />
        <AppText style={styles.error}>{error}</AppText>
      </View>
    );
  else return <AppText style={styles.errorRed}>{error}</AppText>;
}

export default ErrorMessage;
