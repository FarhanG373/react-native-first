import { useColorScheme, StyleSheet, Pressable } from 'react-native';
import {Colors} from '../constance/colors';
import React from 'react'

const ThemedPresseble = ({style, ...props}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} {...props}/>
  )
}

export default ThemedPresseble

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});