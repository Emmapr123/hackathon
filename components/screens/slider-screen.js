import { Button, StyleSheet, Text, View } from "react-native";
import { EstimatedAmount } from "../atoms/estimated-amount";
import { SliderTemplate } from "../templates/information-template";

const SliderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budgetting tool</Text>
      <Text style={{ fontSize: 18, paddingBottom: 20 }}>
        How much energy do you use per week?
      </Text>
      <SliderTemplate />
      <EstimatedAmount amount={"£123"} />
      <Button style={styles.button} title={"Set budget"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    padding: "10%",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  text: {
    color: "#fff",
    fontSize: 28,
  },
  title: {
    fontSize: 28,
    alignSelf: "center",
  },
  button: {
    borderColor: "black",
    backgroundColor: "lightblue",
    borderWidth: 1,
    height: 120,
    width: 50,
    color: "black",
  },
});

export { SliderScreen };
