import React from "react";
import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppTitle from "../components/AppTitle";
import Screen from "../components/Screen";
import Card from "../components/Card";

//rsf

const agendada = [
  {
    id: 2,
    title: "Encomeda #2596",
    subTitle: "Vila Mariana, nº 798",
    subTitle2: "08/02/2021, ás 09h13",
    image: require("../assets/map.png"),
  },
  {
    id: 1,
    title: "Encomenda #2561",
    subTitle: "Vila Mariana, nº 798",
    subTitle2: "07/02/2021, ás 08h15",
    image: require("../assets/map.png"),
  },
];

const concluidas = [
  {
    id: 2,
    title: "Encomeda #1758",
    subTitle: "Vila Mariana, nº 798",
    subTitle2: "03/02/2021, ás 09h13",
    image: require("../assets/map.png"),
  },
  {
    id: 1,
    title: "Encomenda #2412",
    subTitle: "Vila Mariana, nº 798",
    subTitle2: "01/02/2021, ás 08h15",
    image: require("../assets/map.png"),
  },
];

function HistoricoScreen(props) {
  return (
    <Screen>
      <AppTitle>Historico</AppTitle>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>Agendadas</AppText>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={agendada}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={item.subTitle}
                subTitle2={item.subTitle2}
                image={item.image}
              />
            )}
          />
        </View>
        <View>
          <AppText style={styles.sectionTitle}>Concluidas</AppText>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={concluidas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={item.subTitle}
                subTitle2={item.subTitle2}
                image={item.image}
              />
            )}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

//rnss
const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.black,
  },
});

export default HistoricoScreen;
