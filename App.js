import auth from "@react-native-firebase/auth";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import CommunityScreen from "./screens/CommunityScreen";
import MapScreen from "./screens/MapScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Geolocation from "react-native-geolocation-service";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [permission, setPermission] = useState("");
  const askPermission = async () => {
    try {
      await request(
        Platform.OS === "ios"
          ? PERMISSIONS.IOS.LOCATION_ALWAYS
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      ).then((result) => {
        setPermission(result);
      });
    } catch (error) {
      console.log("askPermission", error);
    }
  };
  useEffect(async () => {
    await askPermission();
  }, []);
  return (
    <NavigationContainer>
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
            tabBarIcon: () => (
              <Ionicons name="search" size={24} color="black" />
            ),
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
            tabBarIcon: () => (
              <Ionicons name="person" size={24} color="black" />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
