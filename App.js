import React from 'react';

import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputCountainer}>
        <TextInput style={styles.inputText} placeholder="your course goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text> List Of Goals </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 10,
  },
  inputCountainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
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
    margin: 10,
    padding: 10,
    borderColor: 'red',
    borderWidth: 1,
  },
});
