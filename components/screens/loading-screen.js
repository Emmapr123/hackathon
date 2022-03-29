import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "@ui-kitten/components";
import React from "react";
import InsightItemList from "./../molecules/insight-card";
import LottieView from 'lottie-react-native';

const LoadingScreen = () => {  
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
    <View style={{height: windowHeight, width: windowWidth, alignItems: 'center'}}>
        <LottieView resizeMode={'cover'} style={{height: windowHeight}} source={require('./../../assets/ovo-loading.json')} autoPlay loop />
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

export default LoadingScreen;
