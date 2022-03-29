import { View, Text, StyleSheet } from "react-native";
import { UsageBar } from "../molecules/usage-bar";

const UsageTimeContainer = ({time, percentage, amount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{time}</Text>
      <UsageBar {...{percentage}} />
      <Text stlye={styles.text}>£{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
  },
});

export { UsageTimeContainer };
