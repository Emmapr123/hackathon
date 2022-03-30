import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Layout, ViewPager } from "@ui-kitten/components";
import { UsageTimeContainer } from "../organisms/usage-time-container";
import RemainingBudget from "../molecules/progress-graph";

const ViewPagerSimple = ({ selectedIndex, setSelectedIndex, insightData }) => {
  if (!insightData) return <Text> No insight data</Text>;

  const { month } = insightData;

  const monthPercentageBudget =
    month?.budgetSoFarInPeriod.moneyGBP / month?.actualSoFarInPeriod.moneyGBP;

  const { budgetAndActualHistory } = month;

  return (
    <Layout style={styles.tab} level="2">
      <View style={styles.questionsBox}>
        <RemainingBudget
          progress={monthPercentageBudget}
          spentAmount={month.actualSoFarInPeriod.moneyGBP.toFixed(0)}
          budgetAmount={month.budgetSoFarInPeriod.moneyGBP.toFixed(0)}
          periodLengthDays={month.periodLengthDays}
          periodElapsedDays={month.periodElapsedDays}
        />
      </View>
    </Layout>
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
    maxHeight: 950,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default ViewPagerSimple;
