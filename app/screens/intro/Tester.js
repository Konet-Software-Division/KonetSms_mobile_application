import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'


const OrderPlacementStackComponent = () => {
    return (
      <OrderPlacementStack.Navigator
        initialRouteName={'Search'}
        screenOptions={() => ({
          header: () => {
            return <View style={{height: 56, backgroundColor: 'red'}} />;
          },
        })}>
        <OrderPlacementStack.Screen name="Search" component={SearchScreen} />
        <OrderPlacementStack.Screen
          name="ItemDetail"
          component={ItemDetailScreen}
        />
      </OrderPlacementStack.Navigator>
    );
  };
  
  const ProfileStack = createNativeStackNavigator(); // Defined it without the types here for brevity
  
  const SettingsScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Go to Login Screen</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const LoginScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login screen</Text>
      </View>
    );
  };
  const ProfileStackComponent = () => {
    return (
      <ProfileStack.Navigator initialRouteName={'Settings'}>
        <ProfileStack.Screen name="Settings" component={SettingsScreen} />
        <ProfileStack.Screen name="Login" component={LoginScreen} />
      </ProfileStack.Navigator>
    );
  }



  export default ProfileStackComponent;
