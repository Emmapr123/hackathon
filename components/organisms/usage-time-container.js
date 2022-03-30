import { View, Text, StyleSheet } from "react-native";
import { UsageBar } from "../molecules/usage-bar";

const UsageTimeContainer = ({
  time,
  percentage,
  budgetAmount,
  actualAmount,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 60 }}>
        <Text style={styles.text}>{time}</Text>
        <Text stlye={styles.text}> £{budgetAmount - actualAmount} </Text>
      </View>
      <UsageBar percentage={(actualAmount / budgetAmount) * 100} />
      <View style={{ width: 60 }}>
        {/* <Text stlye={styles.text}>Budget: £{budgetAmount} </Text> */}
        <Text stlye={styles.text}>Spent: £{actualAmount} </Text>
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
