import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";

const styles = StyleSheet.create({
  actionBox: {
    flexDirection: "row",
    flex: 1,
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  button: {
    ...defaultStyles.text,
    color: colors.primary,
    fontSize: 18,
  },
  card: {
    width: "98%",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    alignSelf: "center",
    elevation: 5,
    overflow: "hidden",
  },
  container: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  line: {
    backgroundColor: colors.primary,
    height: 25,
    width: 1,
    marginHorizontal: 20,
  },
  subTitle: {
    color: colors.secondary,
  },
  title: {
    marginBottom: 7,
    color: colors.primary,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default styles;
