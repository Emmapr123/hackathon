import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Layout, ViewPager } from "@ui-kitten/components";
import { UsageTimeContainer } from "../organisms/usage-time-container";

const ViewPagerSimple = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Layout style={styles.tab} level="2">
        <Text style={styles.text}>Spend in £</Text>
        <ScrollView directionalLockEnabled={true}>
          <UsageTimeContainer time={"Mon"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Tue"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Wed"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Thu"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Fri"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Sat"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Sun"} percentage={35} amount={3.5} />
        </ScrollView>
      </Layout>
      <Layout style={styles.tab} level="2">
        <Text style={styles.text}>Spend in £</Text>
        <ScrollView directionalLockEnabled={true}>
          <UsageTimeContainer time={"Jan"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Feb"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Mar"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Apr"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"May"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Jun"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Jul"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Aug"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Sep"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Oct"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Nov"} percentage={35} amount={3.5} />
          <UsageTimeContainer time={"Dec"} percentage={35} amount={3.5} />
        </ScrollView>
      </Layout>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 14,
    marginTop: 10
  },
});

export default ViewPagerSimple;
