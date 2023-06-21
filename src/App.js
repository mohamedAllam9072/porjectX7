import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisibile, setModalIsVisibile] = useState(false);
  function addGoalHandler(inputText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: inputText, id: Math.random().toString()},
    ]); // '...courseGoals' means keep list items and append with 'inputText'
    endAddNewItemHandler();
  }
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id); //if id is true filter = delete the goal from list
    });
  }
  function startAddNewItemHandler() {
    setModalIsVisibile(true);
  }
  function endAddNewItemHandler() {
    setModalIsVisibile(false);
  }
  return (
    <View style={styles.appContainer}>
      <TouchableOpacity style={styles.button} onPress={startAddNewItemHandler}>
        <Text style={styles.buttonText}>Add Goal</Text>
      </TouchableOpacity>
      {modalIsVisibile && (
        <GoalInput
          visibile={modalIsVisibile}
          onAddGoal={addGoalHandler}
          onCancel={endAddNewItemHandler}
        />
      )}
      {/* HINT :::: handle list using scroll view */}

      {/* <ScrollView style={styles.scrollTextview}>
        {courseGoals.map(goal => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.textview}>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* HINT :::: handle list using FlatList */}
      <FlatList
        style={styles.scrollTextview}
        data={courseGoals}
        renderItem={itemData => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteGoal={deleteGoalHandler}
            />
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
    padding: 4,
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
  scrollTextview: {
    flex: 5,
    borderColor: '#dda126',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#dda12616',
  },
  button: {
    margin: 8,
    padding: 8,
    borderColor: '#46a35c',
    backgroundColor: '#46a35c',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
  },
});
