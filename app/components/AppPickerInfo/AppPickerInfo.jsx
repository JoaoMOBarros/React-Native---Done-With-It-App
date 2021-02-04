import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../config/colors";

import AppText from "../AppText";
import Screen from "../Screen";
import AppPickerItemBox from "../AppPickerItemBox";

function AppPickerInfo({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) {
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

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <View>
            <Text
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              CLOSE
            </Text>
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItemBox
                title={item.name}
                label={item.label}
                label2={item.label2}
                onPress={() => handlePicker(item.label)}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

export default AppPickerInfo;
