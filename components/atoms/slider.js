import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View } from "react-native";

const SliderComponent = ({value, getValue}) => {

  return (
    <View style={styles.container}>
      <Slider
        value={value}
        maximumValue={10}
        minimumValue={0}
        step={1}
        trackStyle={styles.slider}
        trackClickable={true}
        thumbStyle={styles.thumb}
        minimumTrackTintColor={"#333CFF"}
        onValueChange={value => getValue(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignItems: "stretch",
    justifyContent: "center",
  },
  slider: {
    backgroundColor: "white",
  },
  thumb: {
    backgroundColor: "#333CFF",
  },
});

export { SliderComponent };
