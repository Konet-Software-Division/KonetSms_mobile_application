import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,Button,Image } from 'react-native';
import Colors from '../../constants/colors'
import InputText from '../UI/InputText';
import calender from '../../images/calendar.png'
import dropdown from '../../images/dropdown.png'
import MainButton from '../UI/MainButton';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomPicker } from 'react-native-custom-picker'
import Dropdownlist from './Dropdownlist'
import TextCapton from '../UI/TextCapton';




const NewContact =(props) => {
    const [selectedLanguage, setSelectedLanguage] = useState();


    const [Firstname, Setfirstname]=useState("");
    const [Lastname, Setlastname]=useState("");
    const [Phonenumber, Setphonenumber]=useState("");
    const [Gender, Setgender]=useState("");
    const [Birth, Setbirth]=useState("");
    const [Group, SetGroup]=useState("");
    const options = [
        {
          label: 'Male',
          value: 1
        },
        {
          label: 'Female',
          value: 2
        }]

    return (
          <View style={styles.container}>
<View style={styles.header}>
<Image
          source={require('../../images/white_back.png')}
                    style={{height:20,width:10,     alignSelf:'center' }} />


<TextCapton style={styles.header_text} text="New Contact" />

<Image
          source={require('../../images/white_back.png')}
                    style={{height:0,width:0,     alignSelf:'center' }} />
                    
</View>
<ScrollView>

<View style={{paddingHorizontal:20}}>

<Image
                    source={require('../../images/contacts/profile_image.png')}
                    style={styles.image} />
                    
                     <InputText
                            value={Firstname}
                            defaultValue='' 
                            placeholder="First Name"
                            onChangeText={text => Setfirstname(text)}
                        />
                    <InputText
                            value={Lastname}
                            defaultValue='' 
                            placeholder="Last Name"
                            onChangeText={text => Setlastname(text)}
                        />
                                             <InputText
                            value={Phonenumber}
                            defaultValue='' 
                            placeholder="Phone Number"
                            onChangeText={text => Setphonenumber(text)}
                        />
                        

      <Dropdownlist title={"Gender"} options={options}/>
           
      <Dropdownlist title={"Select a Group"} options={options}/>

                             <MainButton
                            style={{
                                ...styles.button, backgroundColor: Colors.primary,
                                marginVertical: 20
                            }}
                            onPress={() => {
                                navData.navigation.navigate('Login');
                            }}
                        >
                            <Text>Create</Text>
                        </MainButton>  
                        </View>
                        </ScrollView>
        </View>
        
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'white',
        marginBottom:20
    },
    header: {
        flexDirection: 'row',
        backgroundColor:Colors.primary,
        height:'15%',
        justifyContent:'space-around'
    },
    header_text: {
        fontSize: 18,
         fontWeight: '700',
         color:'white', 
         alignSelf:'center'
    },
    image:{
        height: 96,
        width: 96, 
        marginTop:10,
        marginBottom:10,
        alignSelf:'center' 
    },
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
    },
    dropdown2: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: 20,
        padding: 8,
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
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
        paddingHorizontal:15,
        paddingVertical:10,
        flexDirection:'row',
        backgroundColor:Colors.grey,
        borderColor:Colors.inputbodercolor,
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
  
  });
export default NewContact
