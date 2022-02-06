import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,Image,TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import Colors from '../../constants/colors'
import InputText from '../UI/InputText';
import calender from '../../images/calendar.png'
import dropdown from '../../images/dropdown.png'
import MainButton from '../UI/MainButton';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Darkdropdown from '../UI/Darkdropdown'
import TextCapton from '../UI/TextCapton';




const SendMessage =(props) => {
    const [isSelected, setSelection] = useState(false);

    const [selectedLanguage, setSelectedLanguage] = useState();


    const [Firstname, Setfirstname]=useState("");
    const [Lastname, Setlastname]=useState("");
    const [Phonenumber, Setphonenumber]=useState("");
    const [Gender, Setgender]=useState("");
    const [Birth, Setbirth]=useState("");
    const [Group, SetGroup]=useState("");
    const [checked, setchecked]= useState(false)
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



<TextCapton style={styles.header_text} text="Send Message" />


                    
</View>
<ScrollView>

<View style={{paddingHorizontal:20,paddingTop:50}}>


                     <InputText
                            value={Firstname}
                            defaultValue='' 
                            placeholder="Message Title"
                            onChangeText={text => Setfirstname(text)}
                        />
                    <InputText
                            value={Lastname}
                            defaultValue='' 
                            placeholder="Sender’s Name"
                            onChangeText={text => Setlastname(text)}
                        />
                    <InputText
                            value={Phonenumber}
                            defaultValue='' 
                            placeholder="Sender’s Number"
                            inputtype="numeric"
                            onChangeText={text => Setphonenumber(text)}
                        />
           <TextCapton style={{fontSize: 14, fontWeight:'500', color:Colors.primary
        }} text="Recipients"/>             
                        
      <Darkdropdown  droptitle={"Add Contact Manually"}
      options={options}/>
           
      <Darkdropdown droptitle={"Select Group"} options={options}/>
      <Darkdropdown droptitle={"List Contacts"} options={options}/>

<View style={{justifyContent:'space-between',flexDirection:'row',marginTop:20, marginBottom:10}}>
<TextCapton style={{fontSize: 14, fontWeight:'700', 
        }} text="Message"/>
<TextCapton style={{fontSize: 14, fontWeight:'700', color:Colors.lightblue
        }} text="Personalize"/>
</View>

               <TextInput
        style={styles.input}
        value={Group}
        multiline={true}
        onChangeText={text => SetGroup(text)}
        numberOfLines={4}
   />
       <View style={styles.checkboxContainer}>
       {!checked &&
       <TouchableOpacity onPress={() => setchecked(!checked)}>
       <Image source={require('../../images/checkbox.png')} 
                     style={{ width: 15, height: 15, resizeMode: 'contain'}}  />
       </TouchableOpacity>
       }
       {checked &&
        <TouchableOpacity onPress={() => setchecked(!checked)}
        >
        <Image source={require('../../images/checkbox.png')} 
                      style={{ width: 15, height: 15, resizeMode: 'contain'}}  />
        </TouchableOpacity>
       }
       <TextCapton style={{fontSize: 14, fontWeight:'500',  color:Colors.primary, marginLeft:30
        }}  text="Schedule Send"/>
      </View>
<MainButton
                            style={{
                                ...styles.button, backgroundColor: Colors.lightblue,
                                marginVertical: 20
                            }}
                            onPress={() => {
                                navData.navigation.navigate('Login');
                            }}
                        >
                            <Text>Save as Template</Text>
                        </MainButton>  
                             <MainButton
                            style={{
                                ...styles.button, backgroundColor: Colors.primary,
                            }}
                            onPress={() => {
                                
                                navigation.navigate('Login');
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
        height:150,
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
    
    checkboxContainer: {
        flex:1,
        flexDirection: "row",
        alignItems:'center'
      },
  });
export default SendMessage
