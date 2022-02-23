import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import Colors from '../../constants/colors'
import InputText from '../UI/InputText';
import Calender from '../UI/Calender';
import CustomSpinner from '../UI/CustomSpinner';

import MainButton from '../UI/MainButton';
import * as ContactsNetworks from '../../network/ContactsNetworks';
import { ScrollView } from 'react-native-gesture-handler';
import Dropdownlist from '../UI/Dropdownlist'
import TextCapton from '../UI/TextCapton';
import { useSelector , useDispatch } from 'react-redux';
import {useNetInfo} from "@react-native-community/netinfo";
import * as yup from 'yup'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native';




const NewContact =(props) => {
    const dispatch = useDispatch();
    const netInfo = useNetInfo();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(state => state.getContactsSlice);
    // const navigation = useNavigation();

    // const [selectedLanguage, setSelectedLanguage] = useState();

    const {groups} = useSelector(state => state.getGroupSlice);

    const options = ['Male','Female']

    useEffect(() => {
        if (isError) {
          CustomsnackBar(errorMessage);
        }  
        if (isSuccess) {
        //   navigation.push('Mainfrag')
        }
      }, [isError, isSuccess]);
    const handleSubmit = async (values) => {
        
        if(netInfo.isInternetReachable){
           
            dispatch(ContactsNetworks.createGroup(values));
        }else{
            alert('PLEASE CONNECT TO INTERNET');
        }
}

    return (
          <View style={styles.container}>
<View style={styles.header}>
<Image
          source={require('../../images/white_back.png')}
                    style={{height:20,width:10,     alignSelf:'center' }} />


<TextCapton style={styles.header_text} text="New Contact" />
<TouchableOpacity  onPressIn={() => props.navigation.goBack()}> 
<Image
          source={require('../../images/white_back.png')}
                    style={{height:0,width:0,     alignSelf:'center' }} />
</TouchableOpacity>                     
</View>
<ScrollView>
<Formik
            initialValues={{
                firstname: '',
                lastname: '',
                phonenumber: '',
                gender:'',
                group:'',
                dob:''

                // firstname: 'jibola@gmailcom',
                // lastname: 'jibola@gmailcom',navigation.popToTop()
                // phonenumber: '578457584',
                // gender:'fjgdbnf'
            }}
             onSubmit={values  => {handleSubmit(values)}}
            validationSchema={yup.object().shape({
                // firstname: yup
                //     .string()
                //     .min(2)
                // .required('Please, provide a valid firstname!'),

                // lastname: yup
                //     .string()
                // .min(2)
                // .max(20, 'Please, provide a valid lastname!')
                // .required(),

                // phonenumber: yup
                // .string()
                // .min(9)
                // .max(20, 'Please, provide a valid phonenumber!')
                // .required(),

                // gender: yup
                // .string()
                // .min(4)
                // .max(6, 'Please, provide a valid gender!')
                // .required(),
            })}
        >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <View style={styles.container_form} >
                    <TouchableOpacity  onPressIn={() => props.navigation.goBack()}> 

                    <Image
                    source={require('../../images/contacts/profile_image.png')}
                    style={styles.image} />
                    </TouchableOpacity>
                        <InputText
                            value={values.firstname}
                            // defaultValue='jibola@gmailcom' 
                            errors={errors.firstname}
                            touched={touched.firstname}
                            onChangeText={handleChange('firstname')}
                            onBlur={() => setFieldTouched('firstname')}
                            placeholder="Firstname"
                        />
                    

                        <InputText
                          value={values.lastname}
                        //   defaultValue='obi' 
                          errors={errors.lastname}
                          touched={touched.lastname}
                          onChangeText={handleChange('lastname')}                           
                          onBlur={() => setFieldTouched('lastname')}
                          placeholder="Lastname"
                        />

                        <InputText
                          value={values.phonenumber}
                        //   defaultValue='1234567890' 
                          errors={errors.phonenumber}
                          touched={touched.phonenumber}
                          onChangeText={handleChange('phonenumber')}                           
                          onBlur={() => setFieldTouched('phonenumber')}
                          placeholder="Phone Number"
                          />


<Dropdownlist title={"Gender"} options={options} hint=" " val={(value)=>values.gender=value }  />

<Calender title="Date Of Birth" val={(value)=>values.dob=value }/>
<CustomSpinner visible={isFetching}/>

<Dropdownlist title={"Select a Group"} hint=" " options={ groups.map((val) => { return val.name })} 
val={(value)=>values.group=value }/> 
                    
                        <MainButton
                            style={{
                                ...styles.button, backgroundColor: Colors.primary,
                                marginVertical: 20, width:'100%'
                            }}
                            onPress={handleSubmit}
                        >
                            <Text>Create</Text>
                        </MainButton>

                </View>
            )}
        </Formik>    

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
    container_form: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:40,
        paddingHorizontal:20     
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
    button: {
        height: 44,
        width: '100%',
        backgroundColor: Colors.primary
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
  

    selectedItem:{ 
        fontSize: 14,
        fontWeight:'500',
        color:Colors.primary 
      },
    
      innerContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent:'space-between'
      },
  });
export default NewContact
