import { StyleSheet } from 'react-native'
import React from 'react';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';

const books = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>books</ThemedText>
    </ThemedView>
  )
}

export default books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})