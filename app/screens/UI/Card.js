import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors'

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    // elevation: 5,
    borderRadius: 20,
    backgroundColor: Colors.primary
  }
});

export default Card;
