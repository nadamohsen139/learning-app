import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          paddingHorizontal: 10,
        },
        tabBarActiveTintColor: "#7f69e0",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Practice"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="pie-chart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Achievements"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
