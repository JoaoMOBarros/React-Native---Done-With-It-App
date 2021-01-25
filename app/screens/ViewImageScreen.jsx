import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//rsf

function ViewImageScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },

  closeButton: {
    position: "absolute",
    top: 40,
    left: 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
