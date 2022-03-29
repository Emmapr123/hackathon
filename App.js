import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { DailyWeatherForecast } from './components/atoms/daily-weather-forecast';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import BottomNavigationTabThemingShowcase from './components/BottomNav';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import InsightScreen from './components/screens/insight-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
   <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={InsightScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
