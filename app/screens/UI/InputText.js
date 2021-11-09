import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import TextCapton from './TextCapton';


const InputText = props => {

    return (
        <View style={styles.formControl}>

            <TextCapton style={{fontSize: 14, fontWeight:'700', textAlign: 'left'}} text={props.placeholder}/>

            {/* <TextInput
                style={{ ...styles.input, ...props.style }}
                onChangeText={textChangeHandler}
            /> */}
           
            <TextInput
              value={props.values}
              defaultValue={props.defaultValue}
              style={{ ...styles.input, ...props.style }}
              onChangeText={props.onChangeText}
              onBlur={() => props.onBlur}
              
            />
            {props.touched && props.errors &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{props.errors}</Text>
                        }

        </View>
    )

}

const styles = StyleSheet.create({
    formControl: {
        width: '100%',
        marginBottom:25

    },
    label: {
        fontFamily: 'Campton-Book',
        marginVertical: 8
    },
    input: {
        paddingVertical: 5,
        width: '100%',
        height: 44,
        borderRadius:10,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        maxWidth: 400,
        maxHeight: 400,
        backgroundColor:Colors.grey,
        borderColor:Colors.inputbodercolor,
        width: '100%',
    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        fontFamily: 'Campton',
        color: 'red',
        fontSize: 13
    }
})
export default InputText