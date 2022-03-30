import React, { useCallback, useEffect, useMemo } from "react";
import { Animated, Easing, StyleSheet } from "react-native";

const ANIMATION_DEFAULT_DURATION = 1000;
const ANIMATION_DEFAULT_BOUNCINIESS = 0.8;

function AnimatedBar(props) {
  const {
    color = "black",
    length,
    duration = ANIMATION_DEFAULT_DURATION,
    style,
    animated = true,
    thickness = 5,
    bounciness = ANIMATION_DEFAULT_BOUNCINIESS,
    axis = "width",
  } = props;

  const animation = useMemo(() => new Animated.Value(0), [length]);
  const { bar } = styles(color, thickness);
  const animate = useCallback(
    (animValue) => {
      Animated.timing(animValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }).start();
    },
    [duration]
  );

  useEffect(() => {
    animate(animation);
  }, [animation, animate, length]);

  const animatedWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", `${length}%`],
    easing: Easing.elastic(bounciness),
  });

  const animatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    easing: Easing.elastic(bounciness),
  });

  const animatedStyle = {
    [axis]: animated ? animatedWidth : `${length}%`,
    opacity: animated ? animatedOpacity : 1,
  };

  return <Animated.View style={[bar, animatedStyle, style]} />;
}

function styles(color, thickness) {
  return StyleSheet.create({
    bar: {
      borderWidth: thickness,
      borderRadius: 0,
      position: "absolute",
      borderColor: color,
    },
  });
}

export { AnimatedBar };
