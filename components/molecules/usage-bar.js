import { StyleSheet, View } from "react-native";
import { AnimatedBar } from "../atoms/animated-bar";

const UsageBar = ({ percentage }) => {
  return (
    <View style={styles.bars}>
      <AnimatedBar
        animated={false}
        length={100}
        color={"lightgray"}
        style={styles.views}
        axis={"width"}
      />
      <AnimatedBar
        animated={false}
        color={"#006945"}
        length={percentage}
        style={styles.bookings}
        axis={"width"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  views: {
    position: "absolute",
    // top: 50,
    left: 10,
  },
  bars: {
    width: "60%",
  },
  bookings: {
    position: "absolute",
    left: 10,
    // top: 50,
  },
});

export { UsageBar };
