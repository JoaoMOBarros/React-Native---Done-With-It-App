import React from 'react';

import {ImageBackground, View, Image, Text, StyleSheet} from 'react-native'

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.topView}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <Text style={styles.textLogo}> Sell What You Don't Need</Text>
            </View>

            <View>
                <View style={styles.buttonPlaceholder}/>
                <View style={styles.buttonPlaceholderBlue}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'space-between'
    },

    topView:{
        alignItems: 'center'
    },

    logo:{
        marginTop: 100,
        height: 100,
        width: 100
    },

    textLogo:{
        marginTop: 10
    },

    buttonPlaceholder:{
        height: 70,
        width: "100%",
        backgroundColor: "#fc5c65"
    },

    buttonPlaceholderBlue:{
        height: 70,
        width: "100%",
        backgroundColor: "#4ecdc4"
    }
})

export default WelcomeScreen;