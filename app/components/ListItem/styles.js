import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },

    infoContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },  

    outerContainer: {
        flexDirection: 'row',
        padding: 12,
    },

    title:{
        fontWeight: 'bold'
    },

    subTitle: {
        color: colors.medium
    },
})

export default styles