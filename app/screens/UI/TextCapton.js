import React from 'react'
import {  Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'


const TextCapton = props => {

    return (
        <Text style={{...styles.textStyle, ...props.style}}>{props.text}</Text> 
    )

}

const styles = StyleSheet.create({

    textStyle: {
        // fontFamily: 'Campton-Black',
        color: 'red',
        fontSize: 28,
        fontWeight:'700',
        color:Colors.primary,
    }
})
export default TextCapton