import { Image, ScrollView, StyleSheet, View } from "react-native";
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

  const showerData = insightData.month.insights.showerLengthMinutes

  const heating = {
    title: "Heating your home",
    subTitle:
      "This is the energy used for central heating and controlled by a thermostat.",
    tipTitle: "Defy those draughts",
    tipBody: `Keeping heat in the house counts for more than you’d think. Basic draught proofing is easy, with strips you can stick around window frames, or a draught excluder keeps that warm air inside.`,
  };

  const heatingData = insightData.month.insights.thermostatTemperatureC
  
  const Washing = {
    title: "Washing machine",
    subTitle: "This is the electricity used to power your washign machine.",
    tipTitle: 'Washing Tips',
    tipBody: `Using the washing machine at 30°C max equals £8 off your bills and 40% less on its electricity use per year. Bringing you just as many fresh, clean jumpers.
    Washing your clothes on the lowest cycle can save you energy and money – without damaging them. So your favourite t-shirt lasts much, much longer.`
  };

  const washingData = insightData.month.insights.washingTemperatureC


  return (
    <ScrollView>
      <Image
        source={require("../../assets/Header.png")}
        style={{ position: "absolute" }}
      />
      <InsightItem data={shower} insights={showerData} />
      <InsightItem data={heating} insights={heatingData} />
      <InsightItem data={Washing} insights={washingData} />
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
