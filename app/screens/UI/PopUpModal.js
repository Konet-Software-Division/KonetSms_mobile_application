import React, { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import { View, StyleSheet,Image,TouchableOpacity,Text,TouchableWithoutFeedback } from 'react-native';
import Constant from '../../constants/constant'
import TextCapton from './TextCapton';
import MainButton from '../UI/MainButton';
import Colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native';



const PopUpModal =prop => {
return (
<Modal isVisible={prop.visible}  style={{alignSelf:'center',}}>
<TouchableWithoutFeedback onPress={prop.setVisible}> 

<View style={styles.container}>
  <TextCapton style={{ fontSize: 13, fontWeight: '600' ,alignSelf:'center'}} text='Are you sure you want to delete  
message history?' />
<View style={{flexDirection:'row',justifyContent:'space-between' }}>
<MainButton
                            style={styles.butt}
                            onPress={() => {
                                // navData.navigation.navigate('Login');
                            }}
                        >
                            <Text>Yes</Text>
                        </MainButton>
<MainButton style={{...styles.butt,backgroundColor:Colors.primary}}
                            onPress={() => {
                                prop.setVisible()
                            }}
                        >
                            <Text>No</Text>
                        </MainButton>

</View>

        </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
}      

const styles = StyleSheet.create({
    container: {
     width:Constant.windowWidth/1.2,
     backgroundColor:'white',
     paddingVertical:40, 
     paddingHorizontal:50,
     borderRadius:30,  
    },
    butt:{
        backgroundColor: 'red',
        marginVertical: 20,
        height: 42,
        width: 100,
        borderRadius:30,  
        alignItems: 'center',
        justifyContent: 'center',

    }
})
export default PopUpModal
