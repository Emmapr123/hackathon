import { StyleSheet, View } from "react-native";
import { UsageTimeContainer } from "../organisms/usage-time-container";

const InsightScreen = () => {
  return (
    <View>
      <UsageTimeContainer time={'Jan'} percentage={75} amount={100}/>
      <UsageTimeContainer time={'Feb'} percentage={35} amount={100}/>
      <UsageTimeContainer time={'Mar'} percentage={50} amount={100}/>
    </View>

  );
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
