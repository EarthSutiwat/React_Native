import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ZipCodeScreen from './screen/ZipCodeScreen'

import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './screen/WeatherScreen';
import WindScreen from './screen/WindScreen';

const Stack = createStackNavigator();

export default function App() {
  
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={ZipCodeScreen}/>
       <Stack.Screen name="Weather" component={WeatherScreen}/>
       <Stack.Screen name="Wind" component={WindScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
});
