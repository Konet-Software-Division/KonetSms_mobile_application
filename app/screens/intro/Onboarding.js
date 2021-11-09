import React from 'react';
import {StyleSheet, View, Image,Text} from 'react-native';
import MainButton from '../UI/MainButton';
import TextCapton from '../UI/TextCapton';
import Colors from '../../constants/colors'

 
 const Onboarding  = () => (
    <View style={styles.container}>
    <View style={styles.top}>
    <Image
       source={require('../../images/intro_phone.png')}
    style={styles.image}/>
  
    </View>
    <View style={styles.bottom}>
    <TextCapton text="Simplified Bulk Text
            Messaging"/>
     <View style={{width:"70%", marginTop:"5%"}} >    
    <TextCapton style={{fontSize: 12, fontWeight:'400'}} text=" KonetSMS we put your business first so we 
                 customise to meet your needs"/>
    </View>  
    <View style={{width:"70%", marginTop:"5%"}} >
    <MainButton
                                style={{borderRadius:30,  backgroundColor: Colors.primary }}
                            >
                                <Text>Get Started
                       </Text>
                            </MainButton>
                            </View> 
    </View>
    
     </View>
 );
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
   },
   top: {
     flex: 3,
     justifyContent: "center",
     alignItems:"center",
   },
  
   bottom: {
    flex: 2,
    alignItems:"center",
    
  }, 
  image: {
   
    width:"60%",
    height:"40%"
    
  },
 });
 
 
 export default Onboarding;
 
  