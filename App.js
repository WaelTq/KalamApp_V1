import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './nav';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import {render} from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';



export default class App extends React.Component {
  state = {
    isFontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      SemiBold: require('./fonts/Montserrat-SemiBold.otf'),
      Medium: require('./fonts/Montserrat-Medium.otf'),
      Regular: require('./fonts/Montserrat-Regular.otf'),
    });
    this.setState({isFontLoaded: true});
  }

  render() {
    return this.state.isFontLoaded === true ? <AppNavigator /> : AppLoading;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});