import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import AppText from "../AppText";
import styles from "./styles";

function BoxCard({ id, day, time, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.container}>
          <AppText style={styles.title} numberOfLines={1}>
            Box #{id}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            Entregue: {day}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            Horário: {time}
          </AppText>
          <View style={styles.actionBox}>
            <Text style={styles.button}>Entregar</Text>
            <View style={styles.line} />
            <Text style={styles.button}>Agendar</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default BoxCard;
