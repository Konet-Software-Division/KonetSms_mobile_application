// import React, { useState, useEffect, Component } from 'react';

// import MainButton from './MainButton';
// import InputText from './InputText';
// import Card from './Card';

// import Colors from '../constants/colors'
// import { Text, Alert, View, StyleSheet, AsyncStorage } from 'react-native';
// import * as Yup from 'yup'
// import { Formik } from 'formik'



// BillerForm = props => {
//     const [fields, setFields] = useState([])
//     const [fofields, setfoFields] = useState()

//     const [searches, setSearches] = useState([])
//     const [result, setresult] = useState([])



//     const biller = props.biller

//     const billerheader = []
//     const da=[] 
//        useEffect(() => {

//         biller.map(function (item) {
//             billerheader.push({ key: item.name })
//             da.push(item.name )
//         });
//         // console.log(billerheader)
//         billerheader.forEach(f => {
//             // console.log(f.key)

//           });
     
//           console.log(da)


//     }, [])
   
//     const validationSchemas = Yup.object().shape({
//         da: Yup.string()
//           .required()
//           .min(4, "pretty sure this will be hacked"),
//           Voucher_Count: Yup.string()
//           .required()
//           .min(2, "pretty sure this will be hacked")
//       });

//     return (
//         <Formik
//             initialValues={fields }
//             onSubmit={values => { authHandler(values) }}
//            validationSchema={validationSchemas }
//         >
//             {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
//                 <View style={styles.container}>
//                     <Card style={styles.authContainer}>                        
//                    {
//               biller.map(function(item) {
//                 return( 
                   
//                                 <InputText
//                                     value={values.Amount}
//                                     style={styles.input}
//                                     defaultValue='' 
//                                     errors={errors.Amount}
//                                     // touched={touched.username}
//                                      onChangeText={handleChange('username')}
//                                     // onBlur={() => setFieldTouched('username')}
//                                     placeholder={item.name}
//                                 />
//                   )
              
//                 })
                   
//                    }

//                         {!isValid &&
//                             <MainButton
//                                 style={{ ...styles.button, backgroundColor: Colors.primary }}
//                             >
//                                 <Text>notset</Text>
//                             </MainButton>
//                         }

//                         {isValid &&
//                             <MainButton
//                                 style={{ ...styles.button, backgroundColor: '#737373' }}
//                                 onPress={handleSubmit}
//                             >
//                                 <Text>Submit</Text>
//                             </MainButton>
//                         }

//                     </Card>
//                 </View>
//             )}
//         </Formik>
//     );

// }
// export default BillerForm

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         width:'100%',
//         height:'100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     input: {
//         borderBottomColor: '#ccc',
//         borderBottomWidth: 1
//     },
//     button: {
//         height: 40,
//         width: '90%',
//         marginStart: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: Colors.primary
//     },
//     label: {
//         fontFamily: 'open-sans-bold',
//         marginVertical: 8
//     },
//     authContainer: {
//         width: '80%',
//         height:'100%',
//         maxWidth: 400,
//         maxHeight: 500,
//         padding: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });


