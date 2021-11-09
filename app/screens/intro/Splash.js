import React from 'react';
import {ImageBackground,Image, Text,StyleSheet, View} from 'react-native';
 
 
 const Splash  = () => (
    <View style={styles.container}>
    <ImageBackground 
       source={require('../../images/splash_screen.png')}
     resizeMode="cover" style={styles.image}/>

     </View>
 );
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   top: {
     flex: 1,
     justifyContent: "center",
     backgroundColor:"black"
   },
   image: {
    flex: 1,
    justifyContent: "center"
  },
   bottom: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:"red"
  },
 });
 
 
 export default Splash;
 
  