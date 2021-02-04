import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingBottom: 100,
  },

  profileImage: {
    height: 55,
    width: 55,
    borderRadius: 30,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    alignSelf: "center",
  },

  screen: {},

  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    marginHorizontal: 10,
  },
});

export default styles;
