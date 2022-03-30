import { StyleSheet, View, Text } from "react-native";

const EstimatedAmount = ({ moneyAmount, carbonAmount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.amount}>£{moneyAmount}</Text>
      <Text style={styles.amount}>CO2 {carbonAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    display: "flex",
  },
  amount: {
    fontSize: 18,
    fontWeight: "700",
  },
});

export { EstimatedAmount };
