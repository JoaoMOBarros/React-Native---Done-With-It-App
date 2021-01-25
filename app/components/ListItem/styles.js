import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginRight: 10
    },

    infoContainer: {
        
    },  

    outerContainer: {
        flexDirection: 'row',
    },

    title:{
        fontWeight: 'bold'
    },

    subTitle: {
        color: colors.medium
    },
})

export default styles