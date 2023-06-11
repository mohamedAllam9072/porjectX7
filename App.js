/* eslint-disable react-native/no-inline-styles */
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'stretch', //stretch = fill crossAxis from top to buttom
          width: '100%',
          height: 300,
        }}>
        <View
          style={{
            flex: 1, //flex working in flexbox only it's like weight in android
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
          }}>
          <Text> 1</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
          }}>
          <Text> 2</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
          }}>
          <Text> 3</Text>
        </View>
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
