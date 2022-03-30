import { useNavigation } from "@react-navigation/core";
import { BlurView } from "expo-blur";
import { useEffect } from "react";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { EstimatedAmount } from "../atoms/estimated-amount";
import { SliderTemplate } from "../templates/information-template";
import LoadingScreen from "./loading-screen";
import { getBudgetFormData, postInsightData, getTrackData } from "./../../functions/energy-api";

const SliderScreen = ({setInsightData}) => {
  const [checked, setChecked] = useState("weekly");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [estimatedMoney, setEstimatedMoney] = useState("-");
  const [estimatedCarbon, setEstimatedCarbon] = useState("-");

  const [monthFormData, setMonthFormData] = useState(false);
  const [weekFormData, setWeekFormData] = useState(false);

  const [formData, setFormData] = useState();

  const budgetSet = async () => {
    setLoading(true);
    setTimeout(async() => {
      const trackRes = await postInsightData("sam.roth@ovoenergy.com", formData.showerLength, formData.thermoTemp, formData.washingTemp);

      const trackWeekRes = await getTrackData("sam.roth@ovoenergy.com", "week");
      const trackMonthRes = await getTrackData("sam.roth@ovoenergy.com", "month");

      setInsightData({
        week: trackWeekRes.data,
        month: trackMonthRes.data,
      });

      setLoading(false);
      navigation.navigate("Budget Tracker");
    }, 1000);
  };

  useEffect(async () => {
    const resMonth = await getBudgetFormData("sam.roth@ovoenergy.com", "month");
    setMonthFormData(resMonth.data);
    const resWeek = await getBudgetFormData("sam.roth@ovoenergy.com", "week");

    setWeekFormData(resWeek.data);
  }, []);

  if (!monthFormData && !weekFormData) return <LoadingScreen />;

  const formPeriodData = checked == "weekly" ? weekFormData : monthFormData;

  const calcEstimatedAmount = (showerLength, thermoTemp, washingTemp) => {
    const {
      showerLengthMinutes,
      everythingElse,
      standingCharge,
      thermostatTemperatureC,
      washingTemperatureC,
    } = formPeriodData.actions;

    let totalMoney = 0;
    let totalCarbon = 0;

    totalMoney += showerLengthMinutes.increment.moneyGBP * showerLength;
    totalCarbon += showerLengthMinutes.increment.carbonCO2e * showerLength;


    totalMoney += thermostatTemperatureC.increment.moneyGBP * thermoTemp;
    totalCarbon += thermostatTemperatureC.increment.carbonCO2e * thermoTemp;



    totalMoney += washingTemperatureC.increment.moneyGBP * (washingTemp / 10) ;
    totalCarbon += washingTemperatureC.increment.carbonCO2e * (washingTemp / 10);

    totalMoney += standingCharge.default.moneyGBP;
    totalMoney += everythingElse.default.moneyGBP;
    totalCarbon += everythingElse.default.carbonCO2e;

    setEstimatedMoney(Math.ceil(totalMoney));
    setEstimatedCarbon(Math.ceil(totalCarbon));
    setFormData({showerLength, thermoTemp, washingTemp});
  };
  if (loading) return <LoadingScreen />;
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
            What time period do you to set your budget for?
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
                value="weekly"
                status={checked === "weekly" ? "checked" : "unchecked"}
                onPress={() => setChecked("weekly")}
                style={styles.radioButton}
                color={"#0D8426"}
                uncheckedColor={"gray"}
              />
              <Text>Weekly</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 25,
              }}
            >
              <RadioButton
                value="monthly"
                status={checked === "monthly" ? "checked" : "unchecked"}
                onPress={() => setChecked("monthly")}
                style={styles.radioButton}
                color={"#0D8426"}
              />
              <Text>Monthly</Text>
            </View>
          </View>
          <Text style={styles.questionsTitle}>Energy habits</Text>
          <Text style={styles.questions}>
            We’ll ask you a few questions on your energy habits to try an
            calculate a set budget for you.
          </Text>
          <SliderTemplate
            formPeriodData={formPeriodData}
            calcEstimatedAmount={calcEstimatedAmount}
          />
          <Text style={styles.questions}>
            Here’s what your budget looks like for the month based on the energy
            habit inputs
          </Text>
          <Text>{checked}</Text>
          <EstimatedAmount
            moneyAmount={estimatedMoney}
            carbonAmount={estimatedCarbon}
          />
          <TouchableOpacity style={styles.button} onPress={() => budgetSet()}>
            {/* <Text>
              Default £ {formPeriodData && formPeriodData?.total.moneyGBP}
            </Text>
            <Text>
              Default val {formPeriodData && formPeriodData?.total.moneyGBP}
            </Text> */}
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
    borderRadius: 5,
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
    width: "100%",
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
