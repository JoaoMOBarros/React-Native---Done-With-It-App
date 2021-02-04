import React from "react";
import { FlatList, View, Image, ScrollView } from "react-native";
import styles from "./styles";

import BoxCard from "../../components/BoxCard";
import Screen from "../../components/Screen";
import AppTitle from "../../components/AppTitle";

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
        <AppTitle style={styles.title}>Olá, André!</AppTitle>
        <Image
          style={styles.profileImage}
          source={require("../../assets/mosh.jpg")}
        />
      </View>
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
