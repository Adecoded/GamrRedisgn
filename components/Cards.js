/* eslint-disable prettier/prettier */
import { Text, View ,StyleSheet, SafeAreaView,Image} from 'react-native';
import React, { Component } from 'react';

export class Cards extends Component {
  render() {
    return (
    <SafeAreaView>
    <View style={styles.container}>
    <View style={styles.cards}>
    <Image style={styles.img} source={require('../assets/3.png')} />
    </View>

    </View>
    </SafeAreaView>
    );
  }
}

export default Cards;
const styles = StyleSheet.create({
container:{
  backgroundColor:'yellow',
width:'100%',
height:'100%',
},

cards:{
  marginTop:20,
width:'100%',
height:'100%',
padding:5,
borderRadius:4,
alignItems:'center',
alignSelf:'center',
},
img:{
borderRadius:20,
width:'90%',
height:'40%',
},
})