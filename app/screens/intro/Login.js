import React, { useState,useEffect, Component } from 'react';
import Constant from '../../constants/constant'
import axios from 'axios';

import MainButton from '../UI/MainButton';
import InputText from '../UI/InputText';
import Colors from '../../constants/colors'
import { Text, ToastAndroid, View, StyleSheet, Image} from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'
import { ScrollView } from 'react-native-gesture-handler';
import TextCapton from '../UI/TextCapton';
import CustomSpinner from '../UI/CustomSpinner';
import * as loginNetworks from '../../network/AuthenticationNetworks';
import Snackbar from 'react-native-snackbar';
import { useSelector, useDispatch } from 'react-redux';
import { clearState } from '../../store/LoginSlice';
import {InternetConnection} from '../../Util/utils';
import {useNetInfo} from "@react-native-community/netinfo";



const Login  = ({navigation})  => {
    const dispatch = useDispatch();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(state => state.loginSlice);
    const netInfo = useNetInfo();
      useEffect(() => {
        dispatch(clearState());
        if (isError) {
          CustomsnackBar(errorMessage);
          dispatch(clearState());
        } 
        if (isSuccess) {
          dispatch(clearState());
          navigation.replace('Mainfrag')
        }
      }, [isError, isSuccess]);

    CustomsnackBar=(message)  => {
        Snackbar.show({ text: message, textColor: 'red',
        backgroundColor: 'black' })
    }
    const handleSubmit = async (values) => {
        
        if(netInfo.isInternetReachable){
            dispatch(loginNetworks.loginUser(values));
        }else{
            alert('PLEASE CONNECT TO INTERNET');

        }
}

    //     const handleSubmit = async (values) => {
    //         try {
    //             const resp = await Axiosclient.post('user_service/api/v1/auth/login',{
    //                 email: values.email,
    //                 password: values.password
                    
    //               });
    //             console.log(resp.data);
                
    //         } catch (err) {
    //             // Handle Error Here
    //             console.error(err);
    //         }
        
        
        
    //  }
    
    return (
<ScrollView style={{ backgroundColor: '#fff'}}>
<View style={styles.container}>
    
<Image
       source={require('../../images/konetsms.png')}
     style={styles.image}/>

        <TextCapton style={{fontSize: 28, fontWeight:'700'}} text="Welcome Back!"/> 
       
        <TextCapton style={{fontSize: 14, fontWeight:'500',color:Colors.primaryforty}} text="Sign in to access account."/>

        <Formik
            initialValues={{
                email: 'jibola@gmail.com',
                password: '1234567890'
            }}
             onSubmit={values  => {handleSubmit(values)}}
            validationSchema={yup.object().shape({
                // email: yup
                //     .string()
                //     .min(4)
                // .required('Please, provide your email!'),

                // password: yup
                //     .string()
                // .min(4)
                // .max(20, 'Password should not excced 10 chars.')
                // .required(),
            })}
        >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <View style={styles.container_form} >
                        <InputText
                            value={values.email}
                            defaultValue='jibola@gmail.com' 
                            errors={errors.email}
                            touched={touched.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="email"
                        />
                    

                        <InputText
                          value={values.password}
                          defaultValue='1234567890' 
                          errors={errors.password}
                          touched={touched.password}
                            onChangeText={handleChange('password')}
                            placeholder="Password"
                            onBlur={() => setFieldTouched('password')}
                            secureTextEntry={true}
                        />
                    
                        <MainButton
                            style={{
                                ...styles.button, backgroundColor: Colors.primary,
                                marginVertical: 20
                            }}
                            onPress={handleSubmit}
                             // navigation.navigate('MainfragScreen')
                             // navData.navigation.navigate('Login');
                        >
                            <Text>Login</Text>
                        </MainButton>

                </View>
            )}
        </Formik>


        <View style={styles.passwordview}>
        <TextCapton style={{fontSize: 14, fontWeight:'500',color:Colors.primary}} text="Forgot password?"/>
        <CustomSpinner visible={isFetching}/>
        <TextCapton style={{fontSize: 14, fontWeight:'500',color:Colors.lightblue}} text="Reset here"/>
        </View>
        </View>
        </ScrollView>
    );
};


export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:'7%',
        paddingRight:'7%',
        marginTop:'40%'
    },
    passwordview: {
        flex:1,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40
      },
      image: {
        flex: 1,
        width: '100%',
        height: 45,
        resizeMode: 'contain',
        marginBottom:40
    },
    container_form: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:40
      
    },
  
    button: {
        height: 44,
        width: '100%',
        backgroundColor: Colors.primary
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 500,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});


