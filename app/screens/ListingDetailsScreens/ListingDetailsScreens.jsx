import React from "react";
import { Image, View } from "react-native";
import AppText from "../../components/AppText";
import ListItem from "../../components/ListItem";
import styles from "./styles";

function ListingDetailsScreens({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.container}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
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
