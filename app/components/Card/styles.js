import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        elevation: 10,
        overflow: 'hidden'
    },
    container: {
        padding: 15
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle:{
        color: colors.secondary,
    },  
    title:{
        marginBottom: 7,
    }
})

export default styles