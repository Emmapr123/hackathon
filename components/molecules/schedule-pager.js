import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Layout, ViewPager } from "@ui-kitten/components";
import { UsageTimeContainer } from "../organisms/usage-time-container";
import RemainingBudget from "../molecules/progress-graph";

const ViewPagerSimple = ({ selectedIndex, setSelectedIndex, insightData }) => {
  const {week, month } = insightData;

  const weekPercentageBudget =  week?.budgetSoFarInPeriod.moneyGBP / week?.actualSoFarInPeriod.moneyGBP;
  const remainingDays =  week?.periodLengthDays - week?.periodElapsedDays

  const monthPercentageBudget =  month?.budgetSoFarInPeriod.moneyGBP / month?.actualSoFarInPeriod.moneyGBP;
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Layout style={styles.tab} level="2">
      <View style={styles.questionsBox}>
        <RemainingBudget progress={weekPercentageBudget} spentAmount={week.actualSoFarInPeriod.moneyGBP} budgetAmount={week.budgetSoFarInPeriod.moneyGBP} remainingDays={remainingDays}/>
      </View>
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
      <View style={styles.questionsBox}>
      <RemainingBudget progress={monthPercentageBudget} spentAmount={month.actualSoFarInPeriod.moneyGBP} budgetAmount={month.budgetSoFarInPeriod.moneyGBP} remainingDays={remainingDays}/>
      </View>
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

  questionsBox: {
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 20,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "gray",
    shadowRadius: 10,
    shadowOpacity: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  tab: {
    maxHeight: 750,
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
