import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
  return (
    <ScrollView>
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
          <MainButton onPress={props.onRestart} color={Colors.primary} >New Game</MainButton>
        </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newGameButtonContainer: {
    marginTop: 20
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').height * 0.7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width < 400 ? 16 : 20
  },
  resultContainer: {
    marginHorizontal: 30,
    textAlign: 'center',
    marginVertical: Dimensions.get('window').height / 60
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;