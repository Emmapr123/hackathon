import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { BudgetTracker } from "../molecules/budget-tracker";

const SliderTemplate = () => {
  const [showers, setShowers] = useState(2);
  const [temp, setTemp] = useState(19);
  const [wash, setWash] = useState(2);

  const getShowers = (event) => {
    setShowers(+event);
  };

  const getTemp = (event) => {
    setTemp(+event);
  };

  const getWash = (event) => {
    setWash(+event);
  };

  return (
    <View style={styles.contianer}>
      <BudgetTracker
        title={"Showers per week"}
        value={showers}
        getValue={getShowers}
        minValue={0}
        maxValue={14}
      />
      <BudgetTracker
        title={"Average Temperature"}
        value={temp}
        getValue={getTemp}
        minValue={0}
        maxValue={25}
      />
      <BudgetTracker
        title={"Average amount of washes"}
        value={wash}
        getValue={getWash}
        minValue={0}
        maxValue={25}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: "15px",
  },
  text: {
    color: "black",
    fontSize: 28,
  },
});

export { SliderTemplate };
