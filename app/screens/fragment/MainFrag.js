import React from 'react';
import {StyleSheet,View,Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Home'
import Contacts from './Contacts'
import Report from './Report'
import Settings from './Settings'
import ReportDetails from '../otherscreen/ReportDetails'
import SendMessage from '../otherscreen/SendMessage'
import NewContact from '../otherscreen/NewContact'
import Login from '../intro/Login'


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ReportStack = createNativeStackNavigator();

  const ReortStackScreen= () => {
  return (
    <ReportStack.Navigator 
    screenOptions={{ headerShown: false, tabBarShowLabel:false }}    >
      <ReportStack.Screen name="Report" component={Report} />
      <ReportStack.Screen name="ReportDetails" component={ReportDetails} />
    </ReportStack.Navigator>
  );
}

const HomeStackScreen= () => {
  return (
    <ReportStack.Navigator 
    screenOptions={{ headerShown: false, tabBarShowLabel:false }}    >
      <ReportStack.Screen name="Home" component={Home} />
      <ReportStack.Screen name="SendMessage" component={SendMessage} />
    </ReportStack.Navigator>
  );
}

const ContactsStackScreen= () => {
  return (
    <ReportStack.Navigator 
    screenOptions={{ headerShown: false, tabBarShowLabel:false }}    >
      <ReportStack.Screen name="Contacts" component={Contacts} />
      <ReportStack.Screen name="NewContact" component={NewContact} />
    </ReportStack.Navigator>
  );
}

const SettingsStackScreen= () => {
  return (
    <ReportStack.Navigator 
    screenOptions={{ headerShown: false, tabBarShowLabel:false }}    >
      <ReportStack.Screen name="Settings" component={Settings} />
      {/* <ReportStack.Screen name="Login" component={Login} /> */}
    </ReportStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

const MainFrag= () => {
  return (

<NavigationContainer  style={styles.container}>
        <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel:false }}      
        >
              <Tab.Screen 
          name="HomeActiviy"
          component={HomeStackScreen}
          options={{
            title: '', //Set Header Title
            tabBarIcon: ({ focused }) => (
              <View>
              {
                    focused ? <Image 
                    style={styles.image} source={
                      require('../../images/mainfrag/home_dark.png')} />:
                      <Image 
                    style={styles.image} source={
                      require('../../images/mainfrag/home_light.png')} />
                  }
                  </View>
            ),
          }}/>
          <Tab.Screen
          name="contacts"
          component={ContactsStackScreen}
          options={{
            title: '', //Set Header Title
            tabBarIcon: ({ focused }) => (
              <View>
              {
                    focused ? <Image 
                    style={styles.image} source={
                      require('../../images/mainfrag/contact_dark.png')} />:
                      <Image 
                    style={styles.image} source={
                      require('../../images/mainfrag/contact_light.png')} />
                  }
                  </View>
            ),
          }}/>
                     <Tab.Screen
          name="Report"
          component={ReortStackScreen}
          options={{
            title: '', //Set Header Title
            tabBarIcon: ({ focused }) => (
              <View>
              {
                    focused ? <Image 
                    style={styles.image} source={
                      require('../../images/mainfrag/report_dark.png')} />:
                      <Image 
                    style={styles.image} source={
                      require('../../images/mainfrag/report_light.png')} />
                  }
                  </View>
            ),
          }}/>
          <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            title: '', //Set Header Title
            tabBarIcon: ({ focused }) => (
              <View>
              {
                    focused ? <Image 
                    style={styles.image} source={
                      require('../../images/mainfrag/settings_light.png')} />:
                      <Image 
                    style={styles.image} source={
                      require('../../images/mainfrag/settings_light.png')} />
                  }
                  </View>
            ),
          }}/>
     
        </Tab.Navigator>
      </NavigationContainer>
  );
};


export default MainFrag;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:'white'
  },
    image: {
      width: 30,
      height: 30,
     
  },


});
