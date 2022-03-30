import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
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
        <RemainingBudget progress={0.4} />
      </View>
      <View style={styles.box}>
        <Text style={styles.header}>Estimated total spend</Text>
        <TabBarSimple
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <ViewPagerSimple
          selectedIndex={selectedIndex}
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
          // onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
            View other energy insights
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Text style={styles.header}>We're here to help</Text>
        <Text style={styles.body}>
          If you’d like more support on your budget, you can reach out to us.
        </Text>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
            Get in touch
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
