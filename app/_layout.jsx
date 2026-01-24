import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { use } from "react";
import { Slot, Stack } from "expo-router";
import {Colors} from '../constance/colors'
import { UserProvider } from "../context/userContext";
const RootLayout = () => {

const colorScheme = useColorScheme();
console.log(colorScheme);
const theme = Colors[colorScheme] || Colors.light;

  return (
    <UserProvider>
    <Stack screenOptions={{
         headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
    }}>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      <Stack.Screen
        name="index"
        options={{
          title: "Home Page",
          headerShown: false,
        }}
      />
    </Stack>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
