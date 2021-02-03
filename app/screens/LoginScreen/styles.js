import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  logo: {
    width: 280,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 25,
  },

  button: {
    marginTop: 100,
    width: "80%",
    alignSelf: "center",
    marginBottom: 25,
  },

  motto: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 25,
  },

  password: {
    marginTop: 50,
    fontWeight: "400",
    color: colors.primary,
    alignSelf: "center",
  },
});

export default styles;
