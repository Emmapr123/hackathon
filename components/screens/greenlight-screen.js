import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import React from "react";
import InsightItemList from "./../molecules/insight-card";

const GreenLightScreen = () => {  return (
        <View>
          <InsightItemList />
        </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 25,
  },
  layout: {
    justifyContent: "center",
    alignItems: "center",
  }
});

export default GreenLightScreen;
