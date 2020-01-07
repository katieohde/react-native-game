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
        <View style={styles.imageContainer}>
        <Image 
          fadeDuration={1000}
          style={styles.image} 
          //source={require('../assets/success.png')} //local image
          source={{uri: 'https://cdn.pixabay.com/photo/2020/01/04/21/21/animal-4741740_960_720.jpg'}} //web image
          resizeMode="cover" />
      </View>
      <Text style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
      </Text>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  resultContainer: {
    marginHorizontal: 30,
    textAlign: 'center',
    marginVertical: 15
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;