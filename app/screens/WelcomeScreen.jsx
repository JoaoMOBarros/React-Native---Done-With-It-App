import React from "react";

import { ImageBackground, View, Image, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.topView}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.textLogo}> Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },

  topView: {
    alignItems: "center",
  },

  logo: {
    marginTop: 100,
    height: 100,
    width: 100,
  },

  buttonContainer: {
    width: "100%",
    padding: 20,
  },

  textLogo: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default WelcomeScreen;
