import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DailyWeatherForecast } from './components/atoms/daily-weather-forecast';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi Andrew!</Text>
      <DailyWeatherForecast />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#265804',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
  }
});
