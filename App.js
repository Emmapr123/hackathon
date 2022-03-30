import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import BottomNavigationTabThemingShowcase from "./components/BottomNav";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SliderScreen } from "./components/screens/slider-screen";
import InsightScreen from "./components/screens/insight-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GreenLightScreen from "./components/screens/greenlight-screen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Budget Tracker"
              component={InsightScreen}
              options={{
                // activeTintColor: '#e91e63',
                // tabBarLabel: "Budget Tracket",
                tabBarIcon: () => {
                  <Image source={require("./assets/home.png")} width={10} height={10} style={{backgroundColor: 'green'}} />;
                },
              }}
            />

            <Tab.Screen name="Settings" component={SliderScreen} />
            <Tab.Screen name="Analytics" component={GreenLightScreen} />
          </Tab.Navigator>
        </NavigationContainer>
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
    color: "#fff",
    fontSize: 28,
  },
});
