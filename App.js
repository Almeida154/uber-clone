import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <Text style={styles.text}>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});