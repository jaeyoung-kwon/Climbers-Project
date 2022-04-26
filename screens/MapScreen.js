import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import NaverMapView, { Marker } from "react-native-nmap";
import { PERMISSIONS, check } from "react-native-permissions";
import Geolocation from "react-native-geolocation-service";
import RBSheet from "react-native-raw-bottom-sheet";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text``;

const MapScreen = () => {
  const [location, setLocation] = useState({});
  const [locationInfo, setLocationInfo] = useState({});
  const refRBSheet = useRef();
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
  const openBottomSheet = (loca) => {
    setLocationInfo(loca);
    refRBSheet.current.open();
    console.log(loca);
  };
  return (
    <>
      <NaverMapView
        style={{ width: "100%", height: "100%" }}
        showsMyLocationButton={true}
        center={{ ...P0, zoom: 16 }}
      >
        <Marker
          coordinate={P0}
          onClick={() => {
            setLocationInfo(P0);
            refRBSheet.current.open();
            console.log(P0);
          }}
        />
        <Marker
          coordinate={P1}
          pinColor="blue"
          onClick={() => {
            setLocationInfo(P1);
            refRBSheet.current.open();
            console.log(P1);
          }}
        />
        <Marker
          coordinate={P2}
          pinColor="red"
          onClick={() => {
            setLocationInfo(P2);
            refRBSheet.current.open();
            console.log(P2);
          }}
        />
        <Marker coordinate={location} />
      </NaverMapView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <Container>
          <Title>{locationInfo.latitude}</Title>
          <Title>{locationInfo.longitude}</Title>
        </Container>
      </RBSheet>
    </>
  );
};

export default MapScreen;
