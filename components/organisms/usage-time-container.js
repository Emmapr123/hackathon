import { View, Text, StyleSheet } from "react-native";
import { UsageBar } from "../molecules/usage-bar";

const UsageTimeContainer = ({ time, percentage, amount }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 40 }}>
        <Text style={styles.text}>{time}</Text>
      </View>
      <UsageBar {...{ percentage }} />
      <View style={{ width: 40 }}>
        <Text stlye={styles.text}>£{amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    justifyContent: "space-around",
  },
  text: {
    fontSize: 18,
  },
});

export { UsageTimeContainer };
