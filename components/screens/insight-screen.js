import { StyleSheet, View } from "react-native";
<<<<<<< HEAD
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
=======
import { UsageTimeContainer } from "../organisms/usage-time-container";

const InsightScreen = () => {
  return (
    <View>
      <UsageTimeContainer time={'Jan'} percentage={75} amount={100}/>
      <UsageTimeContainer time={'Feb'} percentage={35} amount={100}/>
      <UsageTimeContainer time={'Mar'} percentage={50} amount={100}/>
    </View>

  );
>>>>>>> 4d3c51ba6ad66cdd4b48e681e4ada4bb93086d70
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

export default InsightScreen;
