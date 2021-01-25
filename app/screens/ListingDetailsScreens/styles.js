import {StyleSheet} from 'react-native';
import colors from '../../config/colors'

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    userContainer:{
        marginTop: 40,
    },
    subTitle:{
        color: colors.secondary,
        fontWeight: 'bold'
    }, 
    title:{
        marginBottom: 7,
    }
})

export default styles