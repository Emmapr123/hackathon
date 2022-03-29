import { StyleSheet, View } from "react-native";
import { Text, Layout } from '@ui-kitten/components';
import TabBarSimple from './../molecules/top-nav';
import React from 'react';
import ViewPagerSimple from './../molecules/schedule-pager.js'

const InsightScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

    return(
        <View>
            <TabBarSimple selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}  />
            <ViewPagerSimple selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </View>
    )

const styles = StyleSheet.create({
  title: {
    marginTop: 25,
  },
  layout: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InsightScreen;
