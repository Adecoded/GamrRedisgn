/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet,SafeAreaView} from 'react-native';
import React from 'react';
import Cards from './components/Cards';
import Haeder from './components/Haeder';

const App = () => {
  return (
   <SafeAreaView style={Styles.Container}>
   <Haeder/>
   </SafeAreaView>
  );
};

export default App;
const Styles = StyleSheet.create({
  Container: {
    backgroundColor:'#10132A',
    flex:1,
  },
});
