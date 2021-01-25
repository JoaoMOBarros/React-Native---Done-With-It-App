import React from "react";
import { Image, View } from "react-native";
import AppText from "../../components/AppText";
import ListItem from "../../components/ListItem";
import styles from "./styles";

function ListingDetailsScreens(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
      <View style={styles.container}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreens;
