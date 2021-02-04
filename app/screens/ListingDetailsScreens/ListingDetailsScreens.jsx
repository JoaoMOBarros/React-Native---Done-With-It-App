import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import AppText from "../../components/AppText";
import AppTitle from "../../components/AppTitle";
import ListItem from "../../components/ListItem";
import styles from "./styles";

import moment from "moment";

import DateTimePicker from "@react-native-community/datetimepicker";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";

function ListingDetailsScreens({ route }) {
  const listing = route.params;

  const [date, setDate] = useState(new Date(1598051730000));
  const [hora, setHora] = useState("");
  const [dia, setDia] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const newDate = Date.parse(selectedDate.toUTCString());

    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDia(moment(newDate).format("DD/MM/YYYY").toString());
    setHora(moment(newDate).format("HH:mm").toString());
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <Screen>
      <AppTitle>Box #{listing.id}</AppTitle>
      {console.log(show)}
      <View style={styles.section}>
        <AppText style={styles.sectionTitle}>1. Agendar Entrega</AppText>
        <AppButton
          style={styles.button}
          onPress={showDatepicker}
          title="Selecionar Horário"
        />
        <AppButton
          style={styles.button}
          onPress={showTimepicker}
          title="Selecionar Data"
        />
        <AppText style={styles.line}>Entrega definida para:</AppText>
        <AppText style={styles.resultado}>
          {dia && dia} {hora && ", ás " + hora}
        </AppText>
      </View>

      <AppText style={styles.sectionTitle}>2. Escolher Endereço</AppText>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </Screen>
  );
}

export default ListingDetailsScreens;
