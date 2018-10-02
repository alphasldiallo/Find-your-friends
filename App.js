import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import findFriend from './components/findFriend'
import beacon from './components/beacon'
import Navigation from './navigation/navigation'

export default class App extends React.Component {
  render() {
    return (
     <Navigation />
    );
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

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);

