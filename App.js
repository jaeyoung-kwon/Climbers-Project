import auth from "@react-native-firebase/auth";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Platform } from "react-native";
import Root from "./navigations/Root";

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
      <Root />
    </NavigationContainer>
  );
}
