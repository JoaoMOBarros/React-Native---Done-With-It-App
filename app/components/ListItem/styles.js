import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },

  infoContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },

  outerContainer: {
    width: "98%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
    backgroundColor: colors.white,
    marginBottom: 20,
    elevation: 5,
    borderRadius: 10,
  },

  title: {
    fontWeight: "bold",
  },

  subTitle: {
    color: colors.medium,
  },
});

export default styles;
