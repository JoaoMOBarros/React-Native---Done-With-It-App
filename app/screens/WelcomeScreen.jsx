import React from "react";

import { ImageBackground, View, Image, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.background}>
      <View style={styles.topView}>
        <Image
          style={styles.image}
          source={require("../assets/delivery_home.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/logo/logo_horizontal.png")}
        />
        <Text style={styles.textLogo}>
          {" "}
          Não está em casa para receber sua encomenda? Fica tranquilo! A weBox
          veio te ajudar a receber ela a qualquer momento.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Entrar"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="cadastrar"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 20,
  },

  topView: {
    alignItems: "center",
  },

  image: {
    marginTop: 40,
    height: 300,
    width: 300,
  },

  logo: {
    height: 100,
    width: 280,
  },

  buttonContainer: {
    width: "100%",
    padding: 20,
  },

  textLogo: {
    width: "80%",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
  },
});

export default WelcomeScreen;
