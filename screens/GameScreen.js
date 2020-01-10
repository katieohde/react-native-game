import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  Text,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';

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

const renderListItem = (value, NumOfRound) => (
  <View key={value} style={styles.listItem}>
    <BodyText>#{NumOfRound}:</BodyText>
    <BodyText>{value}</BodyText>
  </View>
)

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('Don\'t lie!', 'Wrong!', [{ text: 'Sorry', style: 'cancel'}
    ]);
    return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current, 
      currentHigh.current, 
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //setRounds(curRounds => curRounds + 1);
    setPastGuesses(curPastGuesses => [nextNumber,...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
      <View style={styles.button} >
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')} style={styles.button} color={Colors.tertiary} >
          <Ionicons name="md-remove" size={24} color="black" />
        </MainButton>
        </View>
        <View style={styles.button} >
          <MainButton onPress={nextGuessHandler.bind(this, 'greater')} style={styles.button} color={Colors.dark} >
            <Ionicons name="md-add" size={24} color="black" />
          </MainButton>
         </View>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>  
          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
        </ScrollView>
      </View>
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
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    width: 400,
    maxWidth:'90%'
  },
  button: {
    width: 100
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get('window').width > 350 ? '60%' : '70%',
    marginVertical: 15
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 1,
    backgroundColor: Colors.light,
    justifyContent: 'space-between',
    width: '80%'
  }
})

export default GameScreen;