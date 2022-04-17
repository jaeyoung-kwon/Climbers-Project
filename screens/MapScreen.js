import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from "react-native-nmap";
import { PERMISSIONS, check } from "react-native-permissions";
import Geolocation from "react-native-geolocation-service";

const MapScreen = () => {
  const [location, setLocation] = useState({});
  const getLocation = () => {
    check(
      Platform.OS === "ios"
        ? PERMISSIONS.IOS.LOCATION_ALWAYS
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    ).then((result) => {
      if (result === "granted") {
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    });
  };
  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.565051, longitude: 126.978567 };
  const P2 = { latitude: 37.565383, longitude: 126.976292 };
  useEffect(async () => {
    await getLocation();
  }, []);
  const onClickMarker = () => {
    console.log("Hello");
  };
  return (
    <NaverMapView
      style={{ width: "100%", height: "100%" }}
      showsMyLocationButton={true}
      center={{ ...P0, zoom: 12 }}
    >
      <Marker coordinate={P0} />
      <Marker coordinate={P1} pinColor="blue" onClick={onClickMarker} />
      <Marker coordinate={P2} pinColor="red" />
      <Marker coordinate={location} />
    </NaverMapView>
  );
};

export default MapScreen;
