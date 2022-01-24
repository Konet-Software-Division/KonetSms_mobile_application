import React, { useState, useEffect } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View, StyleSheet,useWindowDimensions,ActivityIndicator,Image } from 'react-native';
import Colors from '../../constants/colors'
import TextCapton from '../UI/TextCapton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as transactionsNetworks from '../../network/TransactionsNetworks';
import { useSelector, useDispatch } from 'react-redux';
import FlatListUI from '../UI/FlatListUI';
import {formatDate} from '../../Util/utils';


const Settings = () => {


  return (
    <View style={styles.container}>
    <View style={styles.container_header}>
        <TextCapton style={{ fontSize: 24, fontWeight: '700'}} text="Settings" /> 
    </View>
    <View style={styles.container_subheader}>
    <Image
                  source={require('../../images/settings/select_countries.png')}
                  style={{ height: 20, width: 20 }} />
        <TextCapton style={{ fontSize: 14, fontWeight: '400',marginLeft:20 }} text="Select Countries" /> 
    </View>
    <View style={styles.container_subheader}>
    <Image
                  source={require('../../images/settings/change_password.png')}
                  style={{ height: 20, width: 20 }} />
        <TextCapton style={{ fontSize: 14, fontWeight: '400',marginLeft:20 }} text="Change Password" /> 
    </View>
    <View style={styles.container_subheader}>
    <Image
                  source={require('../../images/settings/logout.png')}
                  style={{ height: 20, width: 20 }} />
        <TextCapton style={{ fontSize: 14, fontWeight: '400',marginLeft:20 }} text="Logout" /> 
    </View>
   </View>
  );
}

export default Settings

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: '20%',
      paddingLeft:30,
      flexDirection: 'column',
      backgroundColor:'white',
    
  },

  container_header: {
      alignItems: 'baseline',
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: "10%",
      alignItems: 'center'
  },
  container_subheader: {
    alignItems: 'baseline',
    flexDirection: 'row',
    height: "10%",
    alignItems: 'center'
},

});