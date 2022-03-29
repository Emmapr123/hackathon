import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DailyWeatherForecast } from "./components/atoms/daily-weather-forecast";
import { SliderComponent } from "./components/atoms/slider";
import { BudgetTracker } from "./components/molecules/budget-tracker";

export default function App() {
  return (
    <View style={styles.container}>
      <BudgetTracker title={"showers per week"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#265804",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 28,
  },
});
