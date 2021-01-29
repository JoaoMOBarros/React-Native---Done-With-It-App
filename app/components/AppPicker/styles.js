import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";

const styles = StyleSheet.create({
  closeButton: {
    color: colors.primary,
    fontSize: defaultStyles.text.fontSize,
    alignSelf: "center",
    padding: 10,
  },
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default styles;
