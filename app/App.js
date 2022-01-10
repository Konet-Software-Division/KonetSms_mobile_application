import React from 'react';
import {StyleSheet} from 'react-native';
import Navigator from './navigation/Navigator';
import { Provider } from 'react-redux';
import { store, persistor } from '../app/store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

// const App  = () => (
  
//   <Navigator />
//   // <ReportDetails />

// );

const App = () => {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {/* <Login/> */}
      <Navigator />

      </PersistGate>
    </Provider>
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


