/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
function GoalInput(props) {
  const [inputText, setInputText] = useState('');
  function goalInputHandler(enteredText) {
    setInputText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(inputText);
    setInputText('');
  }
  return (
    <View style={styles.inputCountainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Enter your course goal"
        onChangeText={goalInputHandler} // we don't put () becouse of we need to execute this method every time  text changes
        value={inputText}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={addGoalHandler}>
          <Text style={styles.buttonText}>Add Goal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addGoalHandler}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputCountainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#46a35c',
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    backgroundColor: '#d2d5dbe6',
  },
  inputText: {
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#46a35c',
    width: '90%',
    margin: 8,
    backgroundColor: '#FFFFFF',
  },
  button: {
    flex: 1,
    width: '90%',
    margin: 4,
    padding: 8,
    borderColor:'#46a35c',
    backgroundColor: '#46a35c',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    margin: 8,
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
  },
});
