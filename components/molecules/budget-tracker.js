import { SliderComponent } from "../atoms/slider";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";


const BudgetTracker = ({title}) => {
    const [value, setValue] = useState(2);

  return (
    <View>
      <Text>{title}</Text><Text>{value}</Text>
      <SliderComponent value={value} getValue={setValue} /> 
    </View>
  );
};

export { BudgetTracker };
