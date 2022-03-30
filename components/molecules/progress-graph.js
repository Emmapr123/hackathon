import React from "react";
import { ProgressCircle } from "react-native-svg-charts";
import { Text, Layout, Card } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const RemainingBudget = ({ progress, spentAmount, budgetAmount, periodElapsedDays, periodLengthDays }) => {
  return (
    <View>
      <View style={{ position: "relative" }}>
        <View style={{ position: "absolute", left: "40%", bottom: 0 }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 20,
              color:
                progress < 0.7 ? "#6BBC26" : progress < 1 ? "orange" : "red",
              opacity: progress <= 1 ? 1 : 0.5,
            }}
          >
            £{spentAmount} of £{budgetAmount}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            {periodElapsedDays}  of {periodLengthDays} days
          </Text>
        </View>
        <View>
          <ProgressCircle
            style={{ height: 150, opacity: progress <= 1 ? 1 : 0.3 }}
            progress={progress > 1 ? 1 : progress}
            progressColor={
              progress < 0.7 ? "#6BBC26" : progress < 1 ? "orange" : "red"
            }
            startAngle={-Math.PI * 0.8}
            endAngle={Math.PI * 0.8}
          />
        </View>
      </View>
      {progress < 0.7 ? (
        <Card style={styles.card} status="success">
          <Text>Looks like you're in budget, good job!</Text>
        </Card>
      ) : progress < 1 ? (
        <Card style={styles.card} status="warning">
          <Text>You might be out of budget soon</Text>
        </Card>
      ) : (
        <Card style={styles.card} status="danger">
          <Text>You are over budget</Text>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {},
  card: {
    margin: 20,
  },
});

export default RemainingBudget;
