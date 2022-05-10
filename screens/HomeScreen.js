import React from "react";
import styled from "styled-components/native";
import Video from "react-native-video";
import { StyleSheet, View } from "react-native";
import Sea from "../video/sea.mp4";
import test from "../video/converted.mp4";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: "https://vod-progressive.akamaized.net/exp=1652187279~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2735%2F23%2F588675395%2F2776925141.mp4~hmac=48b40df5a5a2c361131742aaef7923928a5dfe8d375b4eb97325ba52ad1267d0/vimeo-prod-skyfire-std-us/01/2735/23/588675395/2776925141.mp4?filename=River+-+85373.mp4",
        }}
        style={styles.video}
        onLoad={(e) => console.log(e)}
        fullscreen={false}
        repeat={true}
        onAnimatedValueUpdate={() => {}}
        // Can be a URL or a local file.
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default HomeScreen;
