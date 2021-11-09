import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react'
import{Text,StyleSheet,TouchableOpacity} from 'react-native'
import Colors from '../../constants/colors'
import TextCapton from './TextCapton';



const MainButton =props=>{
 return(
     <TouchableOpacity onPress={props.onPress}
      style={{...styles.button,...props.style}}>
 <TextCapton style={{...styles.buttonText,...props.style_text}} text={props.children}/>
</TouchableOpacity>
 )

}

const styles=StyleSheet.create({

   button:{
       paddingVertical:12,
       paddingHorizontal:30,
       borderRadius:10,  
       elevation:3,
       color:Colors.primary
   },
   buttonText:{
    fontSize: 16,
     fontWeight:'700',
     color:'white'

}
})
export default MainButton