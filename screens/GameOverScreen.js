import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text,
  Button,
  Alert,
  Image
} from 'react-native';

import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen} > 
      <TitleText>The Game is Over</TitleText>
      <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Image style={styles.image} source={require('../assets/success.png')} />
      <View style={styles.newGameButtonContainer}>
        <Button title="New Game" onPress={props.onRestart} color={Colors.primary} /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newGameButtonContainer: {
    marginTop: 20
  },
  image: {
    width: '80%',
    height: 300,
    marginTop: 20
  }
});

export default GameOverScreen;