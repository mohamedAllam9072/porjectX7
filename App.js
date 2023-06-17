import React, {useState} from 'react';

import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setInputText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, inputText]); // '...courseGoals' means keep list items and append with 'inputText'
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputCountainer}>
        <TextInput
          style={styles.inputText}
          placeholder="your course goal"
          onChangeText={goalInputHandler} // we don't put () becouse of we need to execute this method every time  text changes
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.scrollTextview}>
        {courseGoals.map(goal => (
          <Text style={styles.textview}>{goal}</Text>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  /**
   *     flexDirection: 'row', //equal vertical oraintion in android
          justifyContent: '', //handle childs inside container in mainAxis from left to right
          alignItems: '', //handle childs inside container in crossAxis from top to bottom
   */
  appContainer: {
    flex: 1,
    padding: 10,
  },
  inputCountainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    marginBottom: 10,
  },
  flexBox: {
    flex: 1, // means take all space of screen like weight in android
    flexDirection: 'column', // flexDirection like oraination in android, column = vertival , row = horizontail
    justifyContent: 'space-between', //distribute boxs inside layout
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textview: {
    color: '#000000',
    backgroundColor: '#00ff00',
  },
  scrollTextview: {
    flex: 5,
    borderColor: 'red',
    borderWidth: 1,
  },
});
