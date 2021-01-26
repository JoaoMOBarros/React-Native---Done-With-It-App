import {Platform, StyleSheet} from 'react-native'
import colors from '../../config/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        elevation: 5,
    },
    icon: {
       marginRight: 10, 
    },
    input:{
        fontSize: 18,
        fontFamily: Platform.OS === 'android'? 'Roboto' : 'Avenir',
        color: colors.dark
    }
})

export default styles