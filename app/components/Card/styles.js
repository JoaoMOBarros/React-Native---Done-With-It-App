import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  card: {
    width: "98%",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    elevation: 5,
    overflow: "hidden",
  },
  container: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 100,
  },
  subTitle: {
    color: colors.secondary,
  },
  title: {
    marginBottom: 7,
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default styles;
