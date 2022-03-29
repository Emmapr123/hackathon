import { SliderComponent } from "../atoms/slider";
import { View, Text, StyleSheet } from "react-native";

const BudgetTracker = ({ title, metric, value, getValue, minValue, maxValue }) => {
  return (
    <View>
      {/* <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}> */}
      <Text style={styles.text}>{title}</Text>
      {/* </View> */}
      <SliderComponent
        value={value}
        getValue={getValue}
        {...{ minValue, maxValue }}
      />
      <View style={{alignItems: 'flex-end'}}>
      <Text>{value} {metric}</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingVertical: 16,
    height: "100px",
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
});

export { BudgetTracker };
