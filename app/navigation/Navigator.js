import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
// import { Navigation } from 'react-native-navigation';
import SplashScreen from '../screens/intro/Splash';
import OnboardingScreen from '../screens/intro/Onboarding';
import LoginScreen from '../screens/intro/Login';

import ChangePasswordScreen from '../screens/intro/ChangePassword';
import SendMessageScreen from '../screens/otherscreen/SendMessage';
import ForgotPasswordScreen from '../screens/intro/ForgotPassword';
import MainfragScreen from '../screens/fragment/MainFrag'
import NewContactScreen from '../screens/otherscreen/SendMessage'
import Colors from '../constants/colors'



const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },

  // navigationOptions:{
  //   header: null,
  //   headerShown: false
  // },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MainNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
        headerShown: false
      },

    },
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: {
        header: null,
        headerShown: false
      },

     },

    // ChangePassword: {
    //   screen: ChangePasswordScreen,
    //   navigationOptions: {
    //     header: null,
    //     headerShown: false
    //   },
    // },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
          header: null,
          headerShown: false,
        },
  
      },
    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
          header: null,
          headerShown: false,
        },
  
      },
    Mainfrag: {
        screen: MainfragScreen,
        navigationOptions: {
          header: null,
          headerShown: false,
        },
  
      },  
    NewContact: {
        screen: NewContactScreen,
        navigationOptions: {
          header: null,
          headerShown: false

        },
  
      }, 
      SendMessage: {
        screen: SendMessageScreen,
        navigationOptions: {
          header: null,
          headerShown: false
        },
      },  
  }, 
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        // <Ionicons
        //   name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        //   size={23}
        //   color={drawerConfig.tintColor}
        // />
        
        <Icon name="rocket" size={'{30}'} color="#900" />

    
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
  

);

export default createAppContainer(MainNavigator);
