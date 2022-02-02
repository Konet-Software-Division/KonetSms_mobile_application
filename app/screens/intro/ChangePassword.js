import React, { useEffect } from 'react';
import MainButton from '../UI/MainButton';
import InputText from '../UI/InputText';
import Colors from '../../constants/colors'
import { Text, View, StyleSheet, Image} from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'
import { ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import TextCapton from '../UI/TextCapton';
import * as authenticationNetworks from '../../network/AuthenticationNetworks';
import { useSelector, useDispatch } from 'react-redux';
import { clearState } from '../../store/AuthenticationSlice';
import {useNetInfo} from "@react-native-community/netinfo";
import {CustomsnackBar} from '../../Util/utils';
import { useNavigation } from '@react-navigation/native';



const ChangePassword  = ({navigation})  => {
    const dispatch = useDispatch();
    // const { isFetching, isSuccess, isError, Message } = useSelector(state => state.authenticationSlice);
    // const navigation = useNavigation();

    // const netInfo = useNetInfo();
    //   useEffect(() => {
    //     dispatch(clearState());
    //     if (isError) {
    //       CustomsnackBar(Message,'Green');

    //       dispatch(clearState());
    //     } 
    //     if (isSuccess) {
    //       dispatch(clearState());
    //       CustomsnackBar(errorMessage,'red');
    //     }
    //   }, [isError, isSuccess]);

 
    const handleSubmit = async (values) => {
        
        if(netInfo.isInternetReachable){
            dispatch(authenticationNetworks.forgotPassword(values.email));
        }else{
            alert('PLEASE CONNECT TO INTERNET');

        }
}

    
return (
<ScrollView style={{ backgroundColor: '#fff'}}>
<View style={styles.container}>
    <TouchableOpacity  onPressIn={() => navigation.goBack()}> 
    <Image source={require('../../images/report/back.png')}
                    style={{ height: 15, width: 7}} />
                    </TouchableOpacity>
    <TextCapton style={{ fontSize: 24, fontWeight: '700', marginLeft:30}} text="Change Password" />
        
    </View>   
<View style={styles.sub_container}>
       
        <Formik
            initialValues={{
                email: 'jibola@gmail.com'
            }}
             onSubmit={values  => {handleSubmit(values)}}
            validationSchema={yup.object().shape({
                // email: yup
                //     .string()
                //     .min(4)
                // .required('Please, provide your email!')

             
            })}
        >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <View style={styles.container_form} >
                    <InputText
                            value={values.email}
                            defaultValue='' 
                            errors={errors.email}
                            touched={touched.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="Current Password"
                        />
                    
                    <InputText
                            value={values.email}
                            defaultValue='' 
                            errors={errors.email}
                            touched={touched.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="New Password"
                        />
                    
                    <InputText
                            value={values.email}
                            defaultValue='' 
                            errors={errors.email}
                            touched={touched.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="Confirm Password"
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
                            <Text>Change</Text>
                        </MainButton>

                </View>
            )}
        </Formik>
        </View>
        </ScrollView>
    );
};


export default ChangePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft:'7%',
        paddingRight:'7%',
        marginTop:'20%',
        flexDirection:'row',
        alignItems: 'center',
    },
    sub_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:'7%',
        paddingRight:'7%',
        marginTop:'10%'
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


