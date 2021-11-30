import * as React from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'
import Colors from '../../constants/colors'
import TextCapton from './TextCapton';

  const Dropdownlist =props => {

  

  renderField =(settings) =>{
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View>
      <TextCapton style={{fontSize: 14, fontWeight:'700', textAlign: 'left'
        }} text={props.title}/>

      <View style={styles.container}>
        <View>
          {!selectedItem && <View style={{flexDirection:'row',justifyContent:'space-between',
        alignItems:'center'}}>
           <Text ></Text>

            <Text >{defaultText}</Text>
            <Image source={require('../../images/dropdown.png')}
                     style={{ width: 15, height: 15, resizeMode: 'contain'}}  />
            </View>}
          {selectedItem && (
            <View style={styles.innerContainer}>
            
              <Text style={{ fontSize: 14,
        fontWeight:'500',
        color:Colors.primary }}>
                {getLabel(selectedItem)}
              </Text>
              <Image source={require('../../images/dropdown.png')}
                     style={{ width: 15, height: 15, resizeMode: 'contain'}}  />
            </View>
          )}
        </View>
      </View>
      </View>
    )
  }

  renderOption=(settings) =>{
    const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <Text style={{ color: 'black', alignSelf:'center' }}>{
          getLabel(item)}</Text>
        </View>
      </View>
    )
  }  

  return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <CustomPicker
          placeholder={props.droptitle}
          options={props.options}
          getLabel={item => item.label}
          fieldTemplate={renderField}
          optionTemplate={renderOption}
          onValueChange={value => {
            // Alert.alert('Selected Item', value ? JSON.stringify(value) : 'No item were selected!')
          }}
        />
      </View>
    )
  
}
export default Dropdownlist

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor:Colors.grey,
    borderColor:Colors.inputbodercolor,
    borderRadius:10,
  },
  
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent:'space-between'
  },
  optionContainer: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
})
