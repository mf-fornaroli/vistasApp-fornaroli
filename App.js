import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import AppNavigator from './navigation/Navigator';

const fetchFont = async () => {
  await Font.loadAsync(
    {
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Medium.ttf'),
    })
};

export default function App() {
  const [loaded, error] = Font.useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Medium.ttf'),
  })

  if (!loaded) return <AppLoading />

  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
