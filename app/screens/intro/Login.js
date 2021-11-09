import React, { useState,useEffect, Component } from 'react';

import MainButton from '../UI/MainButton';
import InputText from '../UI/InputText';

import Colors from '../../constants/colors'
import { Text, Alert, View, StyleSheet, Image} from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'
import { ScrollView } from 'react-native-gesture-handler';
import TextCapton from '../UI/TextCapton';


const Login  = () => (
<ScrollView style={{ backgroundColor: '#fff'}}>
<View style={styles.container}>
<Image
       source={require('../../images/konetsms.png')}
     style={styles.image}/>

        <TextCapton style={{fontSize: 28, fontWeight:'700'}} text="Welcome Back!"/>
        <TextCapton style={{fontSize: 14, fontWeight:'500',color:Colors.primaryforty}} text="Sign in to access account."/>

        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
             onSubmit={values  => {authHandler(values)}}
            validationSchema={yup.object().shape({
                username: yup
                    .string(),
                //     .min(4)
                // .required('Please, provide your username!'),

                password: yup
                    .string()
                // .min(4)
                // .max(20, 'Password should not excced 10 chars.')
                // .required(),
            })}
        >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <View style={styles.container_form} >
                        <InputText
                            value={values.username}
                            defaultValue='' 
                            errors={errors.username}
                            touched={touched.username}
                            onChangeText={handleChange('username')}
                            onBlur={() => setFieldTouched('username')}
                            placeholder="username"
                        />
                    

                        <InputText
                            value={values.password}
                            defaultValue='' 
                            errors={errors.username}
                            touched={touched.username}
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
                            onPress={() => {
                                navData.navigation.navigate('Login');
                            }}
                        >
                            <Text>Login</Text>
                        </MainButton>

                </View>
            )}
        </Formik>
        
        <View style={styles.passwordview}>
        <TextCapton style={{fontSize: 14, fontWeight:'500',color:Colors.primary}} text="Forgot password?"/>
        <TextCapton style={{fontSize: 14, fontWeight:'500',color:Colors.lightblue}} text="Reset here"/>

        </View>
        </View>
        </ScrollView>
    );


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
        alignItems: 'center',
        justifyContent: 'center',
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


