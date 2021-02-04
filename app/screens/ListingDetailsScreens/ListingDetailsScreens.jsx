import React, { useState } from "react";
import { ScrollView, View, Button, Platform, Switch } from "react-native";
import AppText from "../../components/AppText";
import AppTitle from "../../components/AppTitle";
import styles from "./styles";

import moment from "moment";

import DateTimePicker from "@react-native-community/datetimepicker";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import AppPickerInfo from "../../components/AppPickerInfo";
import AppTextInput from "../../components/AppTextInput";

const adresses = [
  {
    name: "Endereço 1",
    label: "Rua Faria Lima, nº 132",
    label2: "São Paulo, SP",
    value: 1,
  },
  {
    name: "Endereço 2",
    label: "Avenida Paulista, nº 456",
    label2: "São Paulo, SP",
    value: 2,
  },
  {
    name: "Endereço 3",
    label: "Vila Mariana, nº 798",
    label2: "São Paulo, SP",
    value: 3,
  },
];

function ListingDetailsScreens({ route, navigation }) {
  const listing = route.params;

  const [date, setDate] = useState(new Date(1598051730000));
  const [hora, setHora] = useState("");
  const [dia, setDia] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [fieldValue, setFieldValue] = useState();
  const [switchValue, setSwitchValue] = useState(false);
  const [text, setText] = useState("");

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppTitle>Encomenda #{listing.id}</AppTitle>
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

        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>2. Escolher Endereço</AppText>
          <AppPickerInfo
            items={adresses}
            onSelectItem={(item) => setFieldValue(item)}
            placeholder={"Escolha um endereço"}
            selectedItem={fieldValue}
          />
          <AppText style={styles.adicionar}>Cadastrar novo endereço +</AppText>
        </View>

        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>
            3. Informações Adicionais
          </AppText>
          <AppText style={styles.question}>
            Gostaria de deixar alguma informação para o entregador?
          </AppText>
          <AppTextInput
            multiline={true}
            onChangeText={(text) => setText(text)}
          />
        </View>

        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>4. Boxes Adicionais</AppText>
          <View style={styles.switchLine}>
            <AppText style={styles.question}>
              Enviar todas as minhas encomendas
            </AppText>
            <Switch
              value={switchValue}
              onValueChange={(newValue) => setSwitchValue(newValue)}
            />
          </View>
        </View>

        <AppButton
          style={styles.button}
          title="Finalizar Entrega"
          onPress={() =>
            navigation.navigate("EntregaConcluida", {
              dia,
              hora,
              fieldValue,
              text,
            })
          }
        />
      </ScrollView>

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
