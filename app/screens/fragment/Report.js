// import React from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Image,
//   TouchableOpacity,
//   Text,ScrollView
// } from 'react-native';
// import TextCapton from '../UI/TextCapton';

// const Report = () => {
//   const clickHandler = () => {
//     //function to handle click on floating Action Button
//     alert('Floating Button Clicked');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//           <ScrollView style={{ backgroundColor: '#fff' }}>

//       <View style={styles.container}>
//       <View style={styles.groups}>
//             <View style={styles.groups_first}>
//                 <Image
//                     source={require('../images/homefrag/group.png')}
//                     style={{ height: 50, width: 50 }} />
//                 <View style={{ marginStart:"5%"}}>
//                     <TextCapton style={{
//                         fontFamily: 'Campton-bold',
//                         fontSize: 14, fontWeight: '700'
//                     }} text="Proly Customers" />
//                     <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="200 Contacts" />
//                 </View>
//                 </View>
//                 <View style={styles.groups_lasticon}>
//                     <Image
//                         source={require('../images/homefrag/message_dark.png')}
//                         style={{ height: 24, width: 24 }} />
//                     <Image
//                         source={require('../images/homefrag/trash.png')}
//                         style={{ height: 24, width: 24 }} />
//                 </View>

//             </View>
//               <View style={styles.groups}>
//             <View style={styles.groups_first}>
//                 <Image
//                     source={require('../images/homefrag/group.png')}
//                     style={{ height: 50, width: 50 }} />
//                 <View style={{ marginStart:"5%"}}>
//                     <TextCapton style={{
//                         fontFamily: 'Campton-bold',
//                         fontSize: 14, fontWeight: '700'
//                     }} text="Proly Customers" />
//                     <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="200 Contacts" />
//                 </View>
//                 </View>
//                 <View style={styles.groups_lasticon}>
//                     <Image
//                         source={require('../images/homefrag/message_dark.png')}
//                         style={{ height: 24, width: 24 }} />
//                     <Image
//                         source={require('../images/homefrag/trash.png')}
//                         style={{ height: 24, width: 24 }} />
//                 </View>

//             </View>
//             <View style={styles.groups}>
//             <View style={styles.groups_first}>
//                 <Image
//                     source={require('../images/homefrag/group.png')}
//                     style={{ height: 50, width: 50 }} />
//                 <View style={{ marginStart:"5%"}}>
//                     <TextCapton style={{
//                         fontFamily: 'Campton-bold',
//                         fontSize: 14, fontWeight: '700'
//                     }} text="Proly Customers" />
//                     <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="200 Contacts" />
//                 </View>
//                 </View>
//                 <View style={styles.groups_lasticon}>
//                     <Image
//                         source={require('../images/homefrag/message_dark.png')}
//                         style={{ height: 24, width: 24 }} />
//                     <Image
//                         source={require('../images/homefrag/trash.png')}
//                         style={{ height: 24, width: 24 }} />
//                 </View>

//             </View>
//             <View style={styles.groups}>
//             <View style={styles.groups_first}>
//                 <Image
//                     source={require('../images/homefrag/group.png')}
//                     style={{ height: 50, width: 50 }} />
//                 <View style={{ marginStart:"5%"}}>
//                     <TextCapton style={{
//                         fontFamily: 'Campton-bold',
//                         fontSize: 14, fontWeight: '700'
//                     }} text="Proly Customers" />
//                     <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="200 Contacts" />
//                 </View>
//                 </View>
//                 <View style={styles.groups_lasticon}>
//                     <Image
//                         source={require('../images/homefrag/message_dark.png')}
//                         style={{ height: 24, width: 24 }} />
//                     <Image
//                         source={require('../images/homefrag/trash.png')}
//                         style={{ height: 24, width: 24 }} />
//                 </View>

//             </View>
//             <View style={styles.groups}>
//             <View style={styles.groups_first}>
//                 <Image
//                     source={require('../images/homefrag/group.png')}
//                     style={{ height: 50, width: 50 }} />
//                 <View style={{ marginStart:"5%"}}>
//                     <TextCapton style={{
//                         fontFamily: 'Campton-bold',
//                         fontSize: 14, fontWeight: '700'
//                     }} text="Proly Customers" />
//                     <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="200 Contacts" />
//                 </View>
//                 </View>
//                 <View style={styles.groups_lasticon}>
//                     <Image
//                         source={require('../images/homefrag/message_dark.png')}
//                         style={{ height: 24, width: 24 }} />
//                     <Image
//                         source={require('../images/homefrag/trash.png')}
//                         style={{ height: 24, width: 24 }} />
//                 </View>

//             </View>
//             <View style={styles.groups}>
//             <View style={styles.groups_first}>
//                 <Image
//                     source={require('../images/homefrag/group.png')}
//                     style={{ height: 50, width: 50 }} />
//                 <View style={{ marginStart:"5%"}}>
//                     <TextCapton style={{
//                         fontFamily: 'Campton-bold',
//                         fontSize: 14, fontWeight: '700'
//                     }} text="Proly Customers" />
//                     <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="200 Contacts" />
//                 </View>
//                 </View>
//                 <View style={styles.groups_lasticon}>
//                     <Image
//                         source={require('../images/homefrag/message_dark.png')}
//                         style={{ height: 24, width: 24 }} />
//                     <Image
//                         source={require('../images/homefrag/trash.png')}
//                         style={{ height: 24, width: 24 }} />
//                 </View>

//             </View>
//             <View style={styles.groups}>
//             <View style={styles.groups_first}>
//                 <Image
//                     source={require('../images/homefrag/group.png')}
//                     style={{ height: 50, width: 50 }} />
//                 <View style={{ marginStart:"5%"}}>
//                     <TextCapton style={{
//                         fontFamily: 'Campton-bold',
//                         fontSize: 14, fontWeight: '700'
//                     }} text="Proly Customers" />
//                     <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="200 Contacts" />
//                 </View>
//                 </View>
//                 <View style={styles.groups_lasticon}>
//                     <Image
//                         source={require('../images/homefrag/message_dark.png')}
//                         style={{ height: 24, width: 24 }} />
//                     <Image
//                         source={require('../images/homefrag/trash.png')}
//                         style={{ height: 24, width: 24 }} />
//                 </View>

//             </View>
//             <View style={styles.groups}>
//             <View style={styles.groups_first}>
//                 <Image
//                     source={require('../images/homefrag/group.png')}
//                     style={{ height: 50, width: 50 }} />
//                 <View style={{ marginStart:"5%"}}>
//                     <TextCapton style={{
//                         fontFamily: 'Campton-bold',
//                         fontSize: 14, fontWeight: '700'
//                     }} text="Proly Customers" />
//                     <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="200 Contacts" />
//                 </View>
//                 </View>
//                 <View style={styles.groups_lasticon}>
//                     <Image
//                         source={require('../images/homefrag/message_dark.png')}
//                         style={{ height: 24, width: 24 }} />
//                     <Image
//                         source={require('../images/homefrag/trash.png')}
//                         style={{ height: 24, width: 24 }} />
//                 </View>

//             </View>
//             <View style={styles.groups}>
//             <View style={styles.groups_first}>
//                 <Image
//                     source={require('../images/homefrag/group.png')}
//                     style={{ height: 50, width: 50 }} />
//                 <View style={{ marginStart:"5%"}}>
//                     <TextCapton style={{
//                         fontFamily: 'Campton-bold',
//                         fontSize: 14, fontWeight: '700'
//                     }} text="Proly Customers" />
//                     <TextCapton style={{ fontSize: 14, fontWeight: '500' }} text="200 Contacts" />
//                 </View>
//                 </View>
//                 <View style={styles.groups_lasticon}>
//                     <Image
//                         source={require('../images/homefrag/message_dark.png')}
//                         style={{ height: 24, width: 24 }} />
//                     <Image
//                         source={require('../images/homefrag/trash.png')}
//                         style={{ height: 24, width: 24 }} />
//                 </View>

//             </View>
//         <TouchableOpacity
//           activeOpacity={0.7}
//           onPress={clickHandler}
//           style={styles.touchableOpacityStyle}>
//           <Image
//             // FAB using TouchableOpacity with an image
//             // For online image
//             source={require('../images/homefrag/group.png')}
//             // For local image
//             //source={require('./images/float-add-icon.png')}
//             style={styles.floatingButtonStyle}
//           />
//         </TouchableOpacity>
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Report;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     height:"100%"
//   },
//   groups: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: '10%',
//     flexDirection: 'row',
//     height: "100%",
//     width:"100%"
// },
// groups_first: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     width:"60%"
// },
// groups_lasticon: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     width:"20%"

// },
//   titleStyle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 10,
//   },
//   textStyle: {
//     fontSize: 16,
//     textAlign: 'center',
//     padding: 10,
//   },
//   touchableOpacityStyle: {
//     position: 'absolute',
//     width: 50,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     right: 30,
//     bottom: 30,
//   },
//   floatingButtonStyle: {
//     resizeMode: 'contain',
//     width: 50,
//     height: 50,
//     //backgroundColor:'black'
//   },
// });