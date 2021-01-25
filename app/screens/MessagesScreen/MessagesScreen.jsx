import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import ListenItemSeparator from "../../components/ListenItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItem from "../../components/ListItem";
import Screen from "../../components/Screen";

import styles from "./styles";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Tapped")}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListenItemSeparator}
      />
    </Screen>
  );
}

export default MessagesScreen;
