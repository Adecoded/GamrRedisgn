/* eslint-disable prettier/prettier */
import { Text, View ,StyleSheet,Image} from 'react-native';
import React, { Component } from 'react';
import Vector from '../assets/'
export class Haeder extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logo}>
      <Image style={styles.img} source={require('../assets/Logo.png')} />
      </View>
      <View style={styles.content}>
      <Image style={styles.profile} source={require('../assets/profile.jpg')}/>
      <Text style={styles.profileText}>Hi egbonRambo</Text>
      <View>
      <Vector/>
      </View>
      </View>
      </View>
      );
  }
}

export default Haeder;
const styles = StyleSheet.create({
container:{
backgroundColor:'#132037',
height:100,
flexDirection:'row',
},

img:{
marginTop:60,
},
content:{
  flexDirection:'row',
  marginTop:50,
},
profile:{
marginLeft:100,
height:40,
width:40,
borderWidth:1,
borderColor:'#586781',
borderRadius:20,

},
profileText:{
  textAlign:'center',
  justifyContent:'center',
  marginTop:12,
  color:'#FFFFFF',
  fontSize:14,
  fontFamily:'Articulat CF',
  fontWeight:'400',
  marginLeft:12,
}
})