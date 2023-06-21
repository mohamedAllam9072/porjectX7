/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, TextInput, Button} from 'react-native';
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
        placeholder="your course goal"
        onChangeText={goalInputHandler} // we don't put () becouse of we need to execute this method every time  text changes
        value={inputText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
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
});
