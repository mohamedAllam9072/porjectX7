import React from 'react';

import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textview}>Hello World!!!!</Text>
      <Text style={styles.textview}>Hello World!!!!</Text>
      <Text style={styles.textview}>Hello World!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
