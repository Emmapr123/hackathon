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

const InsightScreen = ({insightData}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigation = useNavigation();

  if(!insightData) return <Text> Please set a Budget</Text>
  return (
    <ScrollView>
      <Image
        source={require("../../assets/Header.png")}
        style={{ position: "absolute" }}
      />
      <View>
        <Text style={styles.title}>Track you budget</Text>
        <Text style={styles.subTitle}>
          Check your energy budget and see a breakdown on
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.header}>Estimated total spend</Text>
        <TabBarSimple
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <ViewPagerSimple
        insightData={insightData}
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
          onPress={() => navigation.navigate("Analytics")}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
            View other energy insights
          </Text>
        </TouchableOpacity>
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
        <Text style={styles.header}>Ways to get additional support</Text>
        <Text style={styles.body}>
          If you’d like more support on your energy bills, we’re here to support
          you.{" "}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://www.boostpower.co.uk/help/how-to-save-money/boost-energy-fund')}
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
