import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import createBottomTabNavigator from 'react-navigation-tabs';
import FbScreen from './screens/fbScreen';
import IgScreen from './screens/igScreen';

export default class App{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:FbScreen},
  Instagram:{screen:IgScreen},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
