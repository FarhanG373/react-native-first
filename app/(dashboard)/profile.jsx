import { StyleSheet } from 'react-native'
import React from 'react';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';

const profile = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText>profile</ThemedText>
    </ThemedView>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
})