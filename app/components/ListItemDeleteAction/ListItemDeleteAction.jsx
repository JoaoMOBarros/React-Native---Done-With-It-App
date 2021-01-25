import React from "react";
import styles from "./styles";
import colors from "../../config/colors";

import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </View>
  );
}

export default ListItemDeleteAction;
