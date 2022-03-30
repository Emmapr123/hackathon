import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import React from "react";
import InsightItemList from "./../molecules/insight-card";

const GreenLightScreen = () => {
  const shower = new Array(1).fill({
    title: "Shower",
    subTitle: "This is the energy used to power your shower with hot water",
    tipTitle: "Go with the flow",
    tipBody: 'Start saving money and energy while taking a shower: install a water-efficient showerhead or a shower flow reducer. The best bit? These are usually free  check with your water company.'
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
