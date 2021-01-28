import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.danger,
    padding: 6,
    borderRadius: 10,
    marginBottom: 10,
  },
  error: {
    color: colors.white,
  },
  errorRed: {
    color: colors.danger,
  },
  icon: {
    marginLeft: 2,
    marginRight: 8,
    color: colors.white,
  },
});

export default styles;
