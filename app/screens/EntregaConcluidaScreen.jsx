import React from "react";
import Screen from "../components/Screen";
import { StyleSheet, Image, View } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colors from "../config/colors";

const EntregaConcluidaScreen = ({ navigation, route }) => {
  const listing = route.params;

  return (
    <Screen style={styles.screen}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/delivery_done.png")}
        />
        <View>
          <AppText style={styles.title}>TUDO PRONTO :D</AppText>
          <AppText style={styles.text}>
            Agora é só tomar um cafezinho enquanto mandamos a encomenda para
            você!
          </AppText>
          <AppText style={styles.question}>
            Sua encomenda será entregue em
          </AppText>
          <AppText style={styles.title}>
            {listing.dia}, às {listing.hora}
          </AppText>
        </View>

        <View style={styles.section}>
          <AppText style={styles.question}>Informações do pedido</AppText>
          <AppText style={styles.italic}>
            Endereço: {listing.fieldValue}
          </AppText>
          <AppText style={styles.italic}>
            Informações Adicionais: {listing.text}
          </AppText>
          <AppText style={styles.italic}>Frete: R$ XX,XX</AppText>
        </View>
      </View>

      <AppButton
        title="Voltar para Home"
        onPress={() => navigation.navigate("Listings")}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: { height: 260, width: 300, alignSelf: "center" },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: colors.primary,
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    textAlign: "center",
  },
  screen: {
    justifyContent: "space-between",
  },
  section: {
    marginBottom: 20,
  },
  question: {
    marginTop: 10,
    marginBottom: 10,
    fontStyle: "italic",
    fontWeight: "bold",
    alignSelf: "center",
  },
  italic: {
    fontStyle: "italic",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default EntregaConcluidaScreen;
