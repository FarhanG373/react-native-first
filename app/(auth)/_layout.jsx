import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { use } from "react";
import { Slot, Stack } from "expo-router";
import {Colors} from '../../constance/colors'
const RootLayout = () => {

const colorScheme = useColorScheme();
console.log(colorScheme);
const theme = Colors[colorScheme] || Colors.light;

  return (
    <Stack screenOptions={{
         headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          animation: 'none',
    }}>
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
