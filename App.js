import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import BottomNavigationTabThemingShowcase from './components/BottomNav';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SliderScreen } from './components/screens/slider-screen';
import { TargetTracer } from './components/atoms/target-tracer';


export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <SliderScreen />
        <TargetTracer />
        <StatusBar style="auto" />
        <BottomNavigationTabThemingShowcase />
      </View>
    </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  text: {
    color: '#fff',
    fontSize: 28,
  }
});
