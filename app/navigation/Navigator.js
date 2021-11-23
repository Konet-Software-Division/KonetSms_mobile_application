import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
// import { Navigation } from 'react-native-navigation';
import SplashScreen from '../screens/intro/Splash';
import OnboardingScreen from '../screens/intro/Onboarding';
import LoginScreen from '../screens/intro/Login';
import MainfragScreen from '../screens/fragment/MainFrag'
import NewContactScreen from '../screens/otherscreen/NewContact'


import Colors from '../constants/colors'



const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MainNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },

    },
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: {
        header: null,
      },

     },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
          header: null,
        },
  
      },
    Mainfrag: {
        screen: MainfragScreen,
        navigationOptions: {
          header: null,
        },
  
      },  
    NewContact: {
        screen: NewContactScreen,
        navigationOptions: {
          header: null,
        },
  
      }, 
  
  }, {
    initialRouteName: 'NewContact',
  }
);

export default createAppContainer(MainNavigator);
