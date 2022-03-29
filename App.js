import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { DailyWeatherForecast } from './components/atoms/daily-weather-forecast';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import BottomNavigationTabThemingShowcase from './components/BottomNav';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Text style={styles.text}>Hi Andrew22!</Text>
        <DailyWeatherForecast />
        <StatusBar style="auto" />
        <BottomNavigationTabThemingShowcase />
      </View>
    </ApplicationProvider>
    </>
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
