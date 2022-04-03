import React from "react";
import styled from "styled-components/native";
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from "react-native-nmap";

const Container = styled.View``;
const Title = styled.Text``;

const MapScreen = () => {
  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.565051, longitude: 126.978567 };
  const P2 = { latitude: 37.565383, longitude: 126.976292 };
  return (
    <NaverMapView
      style={{ width: "100%", height: "100%" }}
      showsMyLocationButton={true}
      center={{ ...P0, zoom: 16 }}
    >
      <Marker coordinate={P0} />
      <Marker coordinate={P1} pinColor="blue" />
      <Marker coordinate={P2} pinColor="red" />
      <Path coordinates={[P0, P1]} width={10} />
      <Polyline coordinates={[P1, P2]} />
      <Circle coordinate={P0} color={"rgba(255,0,0,0.3)"} radius={200} />
      <Polygon coordinates={[P0, P1, P2]} color={`rgba(0, 0, 0, 0.5)`} />
    </NaverMapView>
  );
};

export default MapScreen;