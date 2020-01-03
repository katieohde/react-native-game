import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  Text,
  Button,
  Alert
} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === props.userChoice) {

    }
  });

  const nextGuessHandler = direction => {
    if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
      Alert.alert('Don\'t lie!', 'Wrong!', [{ text: 'Sorry', style: 'cancel'}
    ]);
    return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
      <View style={styles.button} >
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} style={styles.button} color={Colors.tertiary} />
        </View>
        <View style={styles.button} >
          <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} style={styles.button} color={Colors.dark} />
          </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth:'80%'
  },
  button: {
    width: 100
  }
})

export default GameScreen;