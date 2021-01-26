import React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";

import Card from "../../components/Card";
import ListItem from "../../components/ListItem";
import Screen from "../../components/Screen";

const saleItems = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: "$100",
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "$1000",
    image: require("../../assets/couch.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={saleItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card title={item.title} subTitle={item.price} image={item.image} />
          )}
        />
      </View>
    </Screen>
  );
}

export default ListingScreen;
