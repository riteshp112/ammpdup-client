// app/home/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hide the header
        tabBarActiveTintColor: "#FFD700", // Yellow for active tab
        tabBarInactiveTintColor: "#fff", // White for inactive tab
        tabBarStyle: {
          backgroundColor: "#1a1a1a", // Dark background for the tab bar
          borderTopColor: "#333", // Top border color
          borderTopWidth: 1, // Top border width
        },
      }}
    >
      <Tabs.Screen
        label="Feed"
        name="feed/index" // This should point to your home or main screen
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="feed" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        label="Chat"
        name="chat/index" // This should point to your settings or chat screen
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="wechat" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        label="Records"
        name="records/index" // This should point to your settings or chat screen
        options={{
          title: "Records",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="files-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
