import React from 'react';
import {Image, View, StyleSheet} from 'react-native'
import colors from '../config/colors'

//rsf

function ViewImageScreen(props) {
    return (
        <View style={styles.background}>
            <View style={styles.closeButton}/>
            <View style={styles.deleteIcon}/>
            <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')}/>
        </View>
    );
}

//rnss
const styles = StyleSheet.create({
    background:{
        backgroundColor: colors.black,
        flex: 1,
    },

    closeButton:{
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },

    image: {
        width: '100%',
        height: '100%'
    },

    deleteIcon:{
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    }

})

export default ViewImageScreen;