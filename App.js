// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView, Alert , TouchableNativeFeedback, Button} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

import AppText from './app/components/AppText'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from './app/components/AppButton/index.js';
import Card from './app/components/Card/index.js';
import ListingDetailsScreens from './app/screens/ListingDetailsScreens';


export default function App() {

  return <ListingDetailsScreens/>;
}

