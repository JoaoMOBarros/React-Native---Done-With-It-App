import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  card: {
    width: "98%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 30,
  },
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
  premium: {
    backgroundColor: colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  premiumText: {
    fontWeight: "bold",
    color: colors.white,
    marginLeft: 10,
    fontSize: 16,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 20,
  },

  sectionTitle: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: 22,
    marginLeft: 5,
    marginBottom: 10,
  },
  text: {
    fontStyle: "italic",
    color: colors.white,
  },
  title: { marginBottom: 5 },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
    marginHorizontal: 10,
  },
});

export default styles;
