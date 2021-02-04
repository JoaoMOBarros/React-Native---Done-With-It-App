import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  adicionar: {
    marginTop: 10,
    color: colors.primary,
    alignSelf: "center",
    fontWeight: "bold",
  },
  button: {
    marginBottom: 10,
  },
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  line: {
    marginTop: 10,
    fontStyle: "italic",
  },
  userContainer: {
    marginTop: 40,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  switchLine: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  resultado: {
    fontSize: 19,
    fontWeight: "bold",
    color: colors.primary,
  },
  title: {
    marginBottom: 7,
  },
});

export default styles;
