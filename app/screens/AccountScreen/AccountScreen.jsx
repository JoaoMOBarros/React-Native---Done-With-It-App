import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "../../components/ListItem";
import Screen from "../../components/Screen";
import styles from "./styles";

import colors from "../../config/colors";
import Icon from "../../components/Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListenItemSeparator from "../../components/ListenItemSeparator";
import AppText from "../../components/AppText";

const menuItems = [
  {
    title: "Dados Cadastrais",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Meus Endereços",
    icon: {
      name: "map-marker",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Minha Assinatura",
    icon: {
      name: "star",
      backgroundColor: colors.primary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View>
        <View style={styles.container}>
          <ListItem
            title="Andre Fernandes"
            subTitle="andrefernandes@gmail.com"
            image={require("../../assets/mosh.jpg")}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={ListenItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
          />
        </View>
      </View>
      <View style={styles.logout}>
        <AppText style={styles.logoutText}>Sair do Aplicativo</AppText>
        <MaterialCommunityIcons
          name="logout"
          size={30}
          color={colors.primary}
        />
      </View>
    </Screen>
  );
}

export default AccountScreen;
