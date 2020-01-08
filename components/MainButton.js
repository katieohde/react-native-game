import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
  return <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
    <View style={{ ...styles.button, ...props.style }}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15
  },
  buttonText: {
    color: Colors.dark,
    fontFamily: 'open-sans',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default MainButton;