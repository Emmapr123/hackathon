import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { EstimatedAmount } from "../atoms/estimated-amount";
import { SliderTemplate } from "../templates/information-template";

const SliderScreen = () => {
  const naviagtion = useNavigation();
  const [budget, setBudget] = useState("123");
  const [checked, setChecked] = useState("first");

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/Header.png")}
        style={{ position: "absolute" }}
      />
      <View>
        <Text style={styles.title}>Budget Tracker</Text>
        <Text style={styles.subTitle}>
          A handy tool to help manage your energy usage and take small actions
          to keep on top of your budget
        </Text>
      </View>
      <View style={styles.questionsBox}>
        <View>
          <Text style={styles.questionsTitle}>Let’s start with your goals</Text>
          <Text style={styles.questions}>
            When would you like to set your budget for?
          </Text>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
                style={styles.radioButton}
                color={"#0D8426"}
                uncheckedColor={"gray"}
              />
              <Text>This week</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                style={styles.radioButton}
                color={"#0D8426"}
              />
              <Text>This Month</Text>
            </View>
          </View>
          <Text style={styles.questionsTitle}>Energy habits</Text>
          <Text style={styles.questions}>
            We’ll ask you a few questions on your energy habits to try an
            calculate a set budget for you.
          </Text>
          <SliderTemplate />
          <Text style={styles.questions}>
            Here’s what your budget looks like for the month based on the energy
            habit inputs
          </Text>
          <EstimatedAmount amount={"£123"} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => naviagtion.navigate("Home")}
          >
            <Text style={{ color: "white", fontSize: 28, fontWeight: "700" }}>
              Set budget
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
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
  questionsTitle: {
    fontSize: 28,
    paddingBottom: 20,
    fontWeight: "700",
  },
  questions: {
    fontWeight: "700",
    fontSize: 16,
    marginVertical: 16,
  },
  text: {
    color: "#006945",
    fontSize: 28,
  },
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
  button: {
    height: 53,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#0D8426",
    marginTop: 10,
  },
  radioButton: {
    backgroundColor: "red",
  },
});

export { SliderScreen };
