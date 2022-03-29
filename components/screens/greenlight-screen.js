import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import React from "react";
import { WebView } from 'react-native-webview';

const GreenLightScreen = () => {  return (
        <WebView
        source={{ uri: 'https://dashboard.carbon-zero-nonprod.ovoenergy.com/ovo-greenlight?accountId=8225862&utm_source=navigation' }}
        style={{ marginTop: 20 }}
      />
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
