import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { BudgetTracker } from "../molecules/budget-tracker";

const SliderTemplate = ({formPeriodData, calcEstimatedAmount}) => {
  if(!formPeriodData) return <></>;
  
  const {showerLengthMinutes, everythingElseGBP, standingChargeGBP, thermostatTemperatureC, washingTemperatureC, total} = formPeriodData.actions;

  const [showers, setShowers] = useState(showerLengthMinutes.default);
  const [temp, setTemp] = useState(thermostatTemperatureC.default);
  const [wash, setWash] = useState(washingTemperatureC.default);

  const getShowers = (event) => {
    const newShowerVal = (event[0]);
    setShowers(newShowerVal);
    calcEstimatedAmount(newShowerVal, temp, wash);
  };

  const getTemp = (event) => {
    const newTempVal = (event[0]);
    setTemp(newTempVal);
    calcEstimatedAmount(showers, newTempVal, wash);

  };

  const getWash = (event) => {
    const newWashVal = (event[0]);
    setWash(newWashVal);
    calcEstimatedAmount(showers, temp, newWashVal);

  };

  useEffect(() => {
    setTimeout(() => {
      calcEstimatedAmount(showers, temp, wash);
    }, 500);
  }, []);

  return (
    <View style={styles.contianer}>
      <BudgetTracker
        title={"How long do you typically shower for?"}
        metric={'min'}
        value={showers}
        getValue={getShowers}
        minValue={showerLengthMinutes.min}
        maxValue={showerLengthMinutes.max}
        step={showerLengthMinutes.slideStepSize}
      />
      <BudgetTracker
        title={"What’s the average temperature you set the thermostat to?"}
        value={temp}
        metric={'C'}
        getValue={getTemp}
        minValue={thermostatTemperatureC.min}
        maxValue={thermostatTemperatureC.max}
        step={thermostatTemperatureC.slideStepSize}
      />
      <BudgetTracker
        title={"What’s the average temparature you set your washing machine to?"}
        value={wash}
        metric={'C'}
        getValue={getWash}
        minValue={washingTemperatureC.min}
        maxValue={washingTemperatureC.max}
        step={washingTemperatureC.slideStepSize}
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
