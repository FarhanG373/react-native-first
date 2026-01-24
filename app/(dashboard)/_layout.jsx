import { StyleSheet, useColorScheme } from "react-native";
import { Stack, Tabs } from "expo-router";
import { Colors } from "../../constance/colors";
import { Ionicons } from "@expo/vector-icons";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          padddingTop: 10,
          height: 60,
        },
        tabBarInactiveTintColor: theme.iconColorFocused,
        tabBarActiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="person-circle-outline"
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="add-circle-outline"
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="book-outline"
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="logOut"
        options={{
          title: "Log Out",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="log-out-outline"
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
