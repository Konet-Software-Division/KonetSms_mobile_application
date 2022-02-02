import React from 'react'
import { View, Text, TextInput, StyleSheet,Image,TouchableOpacity } from 'react-native'
import Colors from '../../constants/colors'
import TextCapton from './TextCapton';

const InputText = (props) => {

    return (
        <View style={styles.formControl}>

            <TextCapton style={{fontSize: 14, fontWeight:'700', textAlign: 'left'}} text={props.placeholder}/>

        <View style={styles.input}>  
            <TextInput
              value={props.values}
              defaultValue={props.defaultValue}
              style={{ ...styles.Text_input, ...props.style }}
              onChangeText={props.onChangeText}
              onBlur={() => props.onBlur}
            />
           { props.suffiximage &&
        <TouchableOpacity onPress={props.OnPressPrefix}>
        <Image source={{uri: Image.resolveAssetSource(props.suffiximage).uri}}  
        style={{ width: 15, height: 15, resizeMode: 'contain'}}  />
        </TouchableOpacity>   
           }
        </View>              
            {props.touched && props.errors &&
                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{props.errors}</Text>
                        }
        </View>
    )

}

const styles = StyleSheet.create({
    formControl: {
        width: '100%',
        marginBottom:10

    },
    label: {
        // fontFamily: 'Campton-Book',
        marginVertical: 8
    },
    input: {
        paddingVertical: 5,
        width: '100%',
        borderRadius:10,
        marginTop: 10,
        marginBottom: 20,
        justifyContent:'center',
        alignContent:'center',
        borderWidth: 1,
        paddingVertical:10,
        flexDirection:'row',
        backgroundColor:Colors.grey,
        borderColor:Colors.inputbodercolor,
    },
    Text_input: {
        width: '90%',
        borderRadius:10,
        flexDirection:'row',
        marginStart:5
    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        // fontFamily: 'Campton',
        color: 'red',
        fontSize: 13
    }
})
export default InputText