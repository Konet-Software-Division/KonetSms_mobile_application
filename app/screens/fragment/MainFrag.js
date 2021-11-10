import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,Image
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Home from '../fragment/Home'
import Home from './Home'
import Contacts from './Contacts'
import Report from './Contacts'


const Tab = createBottomTabNavigator();

const MainFrag= () => {
  return (

<NavigationContainer>
        <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarShowLabel:false }}      
        >
              <Tab.Screen
          name="HomeActiviy"
          component={Home}
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
          component={Contacts}
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
          component={Report}
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
          component={Home}
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

    image: {
      width: 30,
      height: 30,
     
  },


});
