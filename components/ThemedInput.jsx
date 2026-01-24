import { StyleSheet, TextInput, useColorScheme} from 'react-native'
import React from 'react'
import {Colors} from '../constance/colors';

const ThemedInput = ({style, placeHolder, secureTextEntry, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;
  return (
    <TextInput placeholder={placeHolder} secureTextEntry={secureTextEntry} style={[{backgroundColor:theme.uiBackground, color:theme.text, borderWidth:1, borderColor:theme.uiBackground, width:'90%', height:40, marginBottom:10, paddingLeft:10, paddingRight:10}, style]} {...props} />
  )
}

export default ThemedInput

const styles = StyleSheet.create({})