import React from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View } from "react-native";

const SliderComponent = ({value, getValue, minValue, maxValue}) => {

  return (
    <View style={styles.container}>
      <Slider
        value={value}
        maximumValue={maxValue}
        minimumValue={minValue}
        step={1}
        trackStyle={styles.slider}
        trackClickable={true}
        thumbStyle={styles.thumb}
        minimumTrackTintColor={"#006945"}
        onValueChange={value => getValue(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '80%',
    alignItems: "stretch",
    justifyContent: "center",
  },
  slider: {
    backgroundColor: "lightgray",
  },
  thumb: {
    backgroundColor: "#006945",
  },
});

export { SliderComponent };
