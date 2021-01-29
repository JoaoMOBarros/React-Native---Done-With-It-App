import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 16 : 0,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default styles;
