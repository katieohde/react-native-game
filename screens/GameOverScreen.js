import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text,
  Button,
  Alert
} from 'react-native';

import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen} > 
      <Text>The Game if Over</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GameOverScreen;