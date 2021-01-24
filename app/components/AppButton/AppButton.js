import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles'

function AppButton({title}) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default AppButton;