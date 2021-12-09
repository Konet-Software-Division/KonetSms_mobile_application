import React, { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import { View, StyleSheet,ActivityIndicator,TouchableOpacity,Text,TouchableWithoutFeedback } from 'react-native';
import Constant from '../../constants/constant'

const CustomSpinner =(props) => {
return (
<Modal isVisible={props.visible}>


<ActivityIndicator size="small" color="#0000ff" />
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
})
export default CustomSpinner
