import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react'
import{Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import Colors from '../../constants/colors'
import TextCapton from '../UI/TextCapton';



const ButtonImageText =props=>{
 return(
     <TouchableOpacity onPress={props.onPress}
      style={{...styles.container,...props.style}}>
          <Image
                    source={require('../images/contacts/addcontacts.png')}
                    style={styles.image} />
      <Text style={styles.textStyle}>{props.title}</Text> 

</TouchableOpacity>
 )

}

const styles=StyleSheet.create({
   container:{
       paddingVertical:5,
       paddingHorizontal:'2%',
       borderRadius:20,  
       elevation:3,
       width:'42%',
       backgroundColor:Colors.lightblue,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center'
       
   }, 
   image: {
        height: 30,
        width:30,
        resizeMode: 'contain',
    },
    
   textStyle: {
    fontFamily: 'Campton',
    fontSize: 14,
    fontWeight:'700',
    color:'white',
}
  
})
export default ButtonImageText