import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Todo from './Todo';

export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
          <Text style={styles.txt}>sdflij</Text>
          <Todo/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:50,
  },

  txt:{
    fontSize:60,
  }
});
