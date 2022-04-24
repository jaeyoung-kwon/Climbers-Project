import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CommunityScreen from "../screens/CommunityScreen";
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      {/*하단 탭*/}
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
        name="Climbers"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="search" size={24} color="black" />,
          headerShown: false,
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbox-ellipses" size={24} color="black" />
          ),
        }}
        name="Community"
        component={CommunityScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="map" size={24} color="black" />,
        }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
