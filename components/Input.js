import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Input = props => {
  return <TextInput {...props} style={{ ...styles.inputBox, ...props.style }} />
}

const styles = StyleSheet.create({
  inputBox: {
    height: 30,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default Input;