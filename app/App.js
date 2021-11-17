import React from 'react';
import {ImageBackground,StyleSheet} from 'react-native';
import Navigator from './navigation/Navigator';
import ReportDetails from '../app/screens/fragment/ReportDetails'


const App  = () => (
  <Navigator />
  // <ReportDetails />

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
 
});


export default App;
