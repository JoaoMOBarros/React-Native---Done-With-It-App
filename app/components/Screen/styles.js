import {StyleSheet, Platform, StatusBar} from 'react-native'
import colors from '../../config/colors'

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 16: 0,
        flex: 1,  
    }
})

export default styles 