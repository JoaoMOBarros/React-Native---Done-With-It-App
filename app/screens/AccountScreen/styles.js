import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  screen: {
    justifyContent: "space-between",
  },
  container: {
    marginVertical: 20,
  },
  logout: {
    marginBottom: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoutText: {
    color: colors.primary,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginRight: 12,
  },
});

export default styles;
