import React from 'react';
import {StyleSheet} from 'react-native';
import Navigator from './navigation/Navigator';
import { Provider } from 'react-redux';
import { store, persistor } from '../app/store/ConfigureStore';
import { PersistGate } from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native'


const App = () => {


  return (
    <NavigationContainer>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {/* <Login/> */}
      <Navigator />
      </PersistGate>
    </Provider>
    </NavigationContainer>

  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
 
});


