import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import React from "react";
import InsightItemList from "./../molecules/insight-card";
import { InsightItem } from "./../molecules/insight-item";

const GreenLightScreen = ({ insightData }) => {
  const shower = {
    title: "Shower",
    subTitle: "This is the energy used to power your shower with hot water",
    tipTitle: "Go with the flow",
    tipBody:
      "Start saving money and energy while taking a shower: install a water-efficient showerhead or a shower flow reducer. The best bit? These are usually free – check with your water company.",
  };

  const heating = {
    title: "Heating your home",
    subTitle:
      "This is the energy used for central heating and controlled by a thermostat.",
    tipTitle: "",
    tipBody: "",
  };

  return (
    <ScrollView>
      <InsightItem data={shower} />
      <InsightItem data={heating} />
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
