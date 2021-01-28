import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";
import AppText from "../AppText";
import Screen from "../../components/Screen";
import AppPickerItem from "../AppPickerItem";

function AppPicker({ icon, items, placeholder, selectedItem, onSelectItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePicker = (option) => {
    onSelectItem(option);
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={24}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                label={item.label}
                onPress={() => handlePicker(item.label)}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

export default AppPicker;
