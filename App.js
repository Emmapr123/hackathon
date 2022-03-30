import { Image, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SliderScreen } from "./components/screens/slider-screen";
import InsightScreen from "./components/screens/insight-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoadingScreen from "./components/screens/loading-screen";
import React, { useEffect } from "react";
import { LoginScreen } from "./components/screens/login";
import { useState } from "react";
import GreenLightScreen from "./components/screens/greenlight-screen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (isLoading) return <LoadingScreen />;
  if (!loggedIn) return <LoginScreen {...{ setLoggedIn }} />;
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Analytics"
              component={GreenLightScreen}
              options={{
                tabBarLabelPosition: "below-icon",
                activeTintColor: "#e91e63",
                tabBarLabel: "Insights",
                tabBarIcon: () => {
                  return (
                    <Image
                      source={require("./assets/Group.png")}
                      width={10}
                      height={10}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Budget Tracker"
              component={InsightScreen}
              options={{
                activeTintColor: "#e91e63",
                tabBarLabel: "Home",
                tabBarIcon: () => {
                  return (
                    <Image
                      source={require("./assets/home.png")}
                      width={10}
                      height={10}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SliderScreen}
              options={{
                activeTintColor: "#e91e63",
                tabBarLabel: "Budget",
                tabBarIcon: () => {
                  return (
                    <Image
                      source={require("./assets/Budget.png")}
                      width={10}
                      height={10}
                    />
                  );
                },
              }}
            />
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
