import React from "react";
import { FlatList, View, Image, ScrollView } from "react-native";
import styles from "./styles";

import BoxCard from "../../components/BoxCard";
import Screen from "../../components/Screen";
import AppTitle from "../../components/AppTitle";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/AppText";

const saleItems = [
  {
    id: 4,
    day: "04/02/2021",
    time: "09h13",
  },
  {
    id: 3,
    day: "02/02/2021",
    time: "14h12",
  },
  {
    id: 2,
    day: "01/02/2021",
    time: "11h23",
  },
  {
    id: 1,
    day: "27/01/2021",
    time: "05h12",
  },
];

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.userInfo}>
        <View>
          <AppTitle style={styles.title}>Olá, André!</AppTitle>
          <View style={styles.premium}>
            <MaterialCommunityIcons name="star" size={22} color={"#ffffff"} />
            <AppText style={styles.premiumText}>weBox Premium</AppText>
          </View>
        </View>
        <Image
          style={styles.profileImage}
          source={require("../../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.card}>
        <AppText style={styles.subTitle}>Informações da sua Box</AppText>
        <AppText style={styles.text}>Rua Bertho Cortez, nº77</AppText>
        <AppText style={styles.text}>Butantã, São Paulo</AppText>
        <AppText style={styles.text}>CEP: 10236-886</AppText>
        <AppText style={styles.text}>Box: 72</AppText>
      </View>
      <AppText style={styles.sectionTitle}>Encomendas recentes</AppText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={saleItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BoxCard
            id={item.id}
            day={item.day}
            time={item.time}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

export default ListingScreen;
