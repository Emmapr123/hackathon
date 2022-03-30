import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import React from "react";
import InsightItemList from "./../molecules/insight-card";

const GreenLightScreen = ({insightData}) => {
  const shower = new Array(1).fill({
    title: "Shower",
    subTitle: "This is the energy used to power your shower with hot water",
  });

  const heating = new Array(1).fill({
    title: "Heating your home",
    subTitle:
      "This is the energy used for central heating and controlled by a thermostat.",
  });

  return (
    <ScrollView>
      <InsightItemList data={shower} />
      <InsightItemList data={heating} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 25,
  },
  layout: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GreenLightScreen;
