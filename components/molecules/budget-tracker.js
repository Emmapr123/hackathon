import { SliderComponent } from "../atoms/slider";
import { View, Text, StyleSheet } from "react-native";

const BudgetTracker = ({ title, value, getValue, minValue, maxValue }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{value}</Text>
      <SliderComponent
        value={value}
        getValue={getValue}
        {...{ minValue, maxValue }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "15px",
    marginBottom: "15px",
    height: "100px",
  },
});

export { BudgetTracker };
