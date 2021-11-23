import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,useWindowDimensions,FlatList,Image } from 'react-native';
import Colors from '../../constants/colors'
import TextCapton from '../UI/TextCapton';
import InputText from '../UI/InputText';
import calender from '../../images/calendar.png'
import dropdown from '../../images/dropdown.png'
import MainButton from '../UI/MainButton';
import { ScrollView } from 'react-native-gesture-handler';


const NewContact =(props) => {
 
    const [Firstname, Setfirstname]=useState("");
    const [Lastname, Setlastname]=useState("");
    const [Phonenumber, Setphonenumber]=useState("");
    const [Gender, Setgender]=useState("");
    const [Birth, Setbirth]=useState("");
    const [Group, SetGroup]=useState("");


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
                            // onBlur={() => setFieldTouched('password')}
                        />
                    <InputText
                            value={Lastname}
                            defaultValue='' 
                            placeholder="Last Name"
                            onChangeText={text => Setlastname(text)}
                            // onBlur={() => setFieldTouched('password')}
                        />
                                             <InputText
                            value={Phonenumber}
                            defaultValue='' 
                            placeholder="Phone Number"
                            onChangeText={text => Setphonenumber(text)}
                            // onBlur={() => setFieldTouched('password')}
                        />
                    <InputText
                            value={Gender}
                            defaultValue='' 
                            placeholder="Gender"
                            onChangeText={text => Setgender(text)}
                            suffiximage={dropdown}
                            OnPressPrefix={() => {
                                // navData.navigation.navigate('Login');
                            }}
                        />
                    {/* <InputText
                            value={Birth}
                            defaultValue='' 
                            placeholder="Date Of Birth"
                            onChangeText={text => Setgender(Birth)}
                            suffiximage={dropdown}
                            OnPressPrefix={() => {
                                navData.navigation.navigate('Login');
                            }}
                        />     */}
                        <InputText
                            value={Group}
                            defaultValue='' 
                            placeholder="Select a Group"
                            onChangeText={text => SetGroup(text)}
                            suffiximage={dropdown}
                            OnPressPrefix={() => {
                                navData.navigation.navigate('Login');
                            }}
                        />  
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
    }
  
  });
export default NewContact
