import { StyleSheet, View, Text } from "react-native";

const EstimatedAmount = ({ amount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>Target amount</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  amount: {
    fontSize: 24,
  },
});

export { EstimatedAmount };
