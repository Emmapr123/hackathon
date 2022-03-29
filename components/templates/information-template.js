import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { BudgetTracker } from "../molecules/budget-tracker";

const SliderTemplate = () => {
  const [showers, setShowers] = useState(10);
  const [temp, setTemp] = useState(19);
  const [wash, setWash] = useState(40);

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
        title={"How long do you typically shower for?"}
        metric={'min'}
        value={showers}
        getValue={getShowers}
        minValue={0}
        maxValue={60}
      />
      <BudgetTracker
        title={"What’s the average temperature you set the thermometer to?"}
        value={temp}
        metric={'C'}
        getValue={getTemp}
        minValue={0}
        maxValue={25}
      />
      <BudgetTracker
        title={"What’s the average temparature you set your washing machine to?"}
        value={wash}
        metric={'C'}
        getValue={getWash}
        minValue={0}
        maxValue={90}
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
