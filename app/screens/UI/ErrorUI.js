import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import MainButton from './MainButton';


const ErrorUI = props => {

    return (
        <View style={styles.centered}>
          <Text>{props.message}</Text>
          <MainButton
            onPress={props.onPress}
            color={Colors.primary}
            style={{ backgroundColor: Colors.primary }}>
          <Text>Try again</Text>
          </MainButton>
        </View>
      );

}

const styles = StyleSheet.create({
    centered: { flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' }
  });
export default ErrorUI