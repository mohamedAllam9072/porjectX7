import React, {useState} from 'react';

import {
  Button,
  FlatList,
  ScrollView,
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
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: inputText, id: Math.random().toString()},
    ]); // '...courseGoals' means keep list items and append with 'inputText'
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

      {/* HINT :::: handle list using scroll view */}

      {/* <ScrollView style={styles.scrollTextview}>
        {courseGoals.map(goal => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.textview}>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* HINT :::: handle list using FlatListÍ */}
      <FlatList
        style={styles.scrollTextview}
        data={courseGoals}
        renderItem={itemData => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.textview}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
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
    color: '#FFFFFF',
  },
  goalItem: {
    margin: 4,
    padding: 4,
    borderRadius: 8,
    backgroundColor: '#000000',
  },
  scrollTextview: {
    flex: 5,
    borderColor: 'red',
    borderWidth: 1,
  },
});
