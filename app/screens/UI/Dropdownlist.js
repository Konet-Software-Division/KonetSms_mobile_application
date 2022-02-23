import * as React from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import Colors from '../../constants/colors'
import TextCapton from './TextCapton';
import SelectDropdown from 'react-native-select-dropdown'


  const Dropdownlist =props => {


  return (
      <View style={styles.container}>
           <View>
      <TextCapton style={{fontSize: 14, fontWeight:'700', textAlign: 'left'
        }} text={props.title}/>
       
   <SelectDropdown
            data={props.options}
          
            onSelect={(selectedItem) => {             
              props.val(selectedItem)
            }}
            defaultButtonText={props.hint}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <Image source={require('../../images/dropdown.png')}
                     style={{ width: 15, height: 15, resizeMode: 'contain'}}  />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
</View>
</View>
    )
  
}
export default Dropdownlist

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center',
    width:'100%', 
    marginBottom:10
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent:'space-between'
  },
  optionContainer: {
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
 
  dropdown1BtnStyle: {
    paddingVertical: 5,
    width: '100%',
    borderRadius:10,
    marginTop: 10,
    marginBottom: 20,
    justifyContent:'center',
    alignContent:'center',
    borderWidth: 1,
    paddingVertical:10,
    backgroundColor:Colors.grey,
    borderColor:Colors.inputbodercolor,
  },
  dropdown1BtnTxtStyle: { 
    fontSize: 14,
    fontWeight:'500',
    color:Colors.primary, 
     textAlign: "left"
     },
  dropdown1DropdownStyle: {
     backgroundColor: "#EFEFEF" 
    },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { 
    color: Colors.primary,
    textAlign: "left" 
  },


})
