import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "@ui-kitten/components";
import TabBarSimple from "./../molecules/top-nav";
import React from "react";
import ViewPagerSimple from "./../molecules/schedule-pager.js";
import { useNavigation } from "@react-navigation/core";
import { UsageTimeContainer } from "../organisms/usage-time-container";

const InsightScreen = ({ insightData }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigation = useNavigation();

  const { month } = insightData;

  const monthPercentageBudget =
    month?.budgetSoFarInPeriod.moneyGBP / month?.actualSoFarInPeriod.moneyGBP;

  const { budgetAndActualHistory } = month;

  if (!insightData) return <Text> Please set a Budget</Text>;
  return (
    <ScrollView>
      <Image
        source={require("../../assets/Header.png")}
        style={{ position: "absolute" }}
      />
      <View>
        <Text style={styles.title}>Track your budget</Text>
        <Text style={styles.subTitle}>
          Here's how you're doing against your budget
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.header}>Monthly Estimate</Text>
        <ViewPagerSimple
          insightData={insightData}
          selectedIndex={1}
          setSelectedIndex={setSelectedIndex}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.header}>Dig into your insight</Text>
        <Text style={styles.body}>
          It looks like you’ve used more heating this month compared to last
          month.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Insights")}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
            View other energy insights
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.monthBox}>
        <Text style={styles.text}>Under/Over budget</Text>
        <ScrollView directionalLockEnabled={true} style={{ height: 250 }}>
          {budgetAndActualHistory.map((item, i) => {
            let percentage = (item.actualGBP / item.budgetGBP) * 100;
            if (percentage > 100) {
              percentage = 100;
            }
            return item.month === "March" ? undefined : (
              <UsageTimeContainer
                key={item.month}
                time={item.month.substring(0, 3).toUpperCase()}
                percentage={percentage}
                budgetAmount={item.budgetGBP.toFixed(0)}
                actualAmount={item.actualGBP.toFixed(0)}
              />
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.box}>
        <Text style={styles.header}>Ways to get additional support</Text>
        <Text style={styles.body}>
          If you’d like more support on your energy bills, we’re here to support
          you.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL(
              "https://www.boostpower.co.uk/help/how-to-save-money/boost-energy-fund"
            )
          }
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
            Find out ways we can help
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginTop: 24,
    paddingHorizontal: 16,
    color: "white",
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 18,
    marginTop: 12,
    paddingHorizontal: 16,
    color: "white",
    fontWeight: "400",
    paddingBottom: 40,
  },
  layout: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "gray",
    shadowRadius: 5,
    shadowOpacity: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  header: {
    fontSize: 18,
    marginVertical: 12,
    paddingHorizontal: 16,
    fontWeight: "700",
  },
  body: {
    fontSize: 18,
    // marginTop: 12,
    paddingHorizontal: 12,
    fontWeight: "400",
    paddingBottom: 40,
  },
  monthBox: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
    height: 300,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "gray",
    shadowRadius: 5,
    shadowOpacity: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  button: {
    height: 53,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#0D8426",
  },
});

export default InsightScreen;
