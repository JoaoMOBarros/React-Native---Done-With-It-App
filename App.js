// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Alert , TouchableNativeFeedback, Button} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

import AppText from './app/components/AppText'
import {MaterialCommunityIcons} from '@expo/vector-icons'


export default function App() {

  return (
    <View>
      <AppText>Eu Adoro Android</AppText>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue"/>
    </View>

  );
}

