import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 8,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default styles;
