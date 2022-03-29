import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import TabBarSimple from "./../molecules/top-nav";
import React from "react";
import ViewPagerSimple from "./../molecules/schedule-pager.js";
import RemainingBudget from "../molecules/progress-graph";

const InsightScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <ScrollView>
      <Image
        source={require("../../assets/Header.png")}
        style={{ position: "absolute" }}
      />
      <View>
        <Text style={styles.title}>Track you budget</Text>
        <Text style={styles.subTitle}>
          You can see how much you’ve spent for the month and
        </Text>
      </View>
      <View style={styles.questionsBox}>
        <Text>This months budget</Text>
        <RemainingBudget />
      </View>
      <TabBarSimple
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <ViewPagerSimple
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
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
  questionsBox: {
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 20,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "gray",
    shadowRadius: 10,
    shadowOpacity: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  layout: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default InsightScreen;
