import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import { Text, Card } from '@ui-kitten/components';
import {
    ContributionGraph,
  } from "react-native-chart-kit";

const ContributionGraphCard = ({selectedIndex, setSelectedIndex}) => {
    const windowWidth = Dimensions.get('window').width;

    const chartConfig = {
        backgroundGradientFrom: "#FFFFFF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 180, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    const commitsData = [
        { date: "2022-02-02", count: 5 },
        { date: "2022-02-03", count: 4 },
        { date: "2022-02-04", count: 3 },
        { date: "2022-03-05", count: 4 },
        { date: "2022-03-06", count: 2 },
        { date: "2022-03-30", count: 2 },
        { date: "2022-03-22", count: 3 },
        { date: "2022-03-01", count: 2 },
        { date: "2022-03-02", count: 4 },
        { date: "2022-03-05", count: 2 },
        { date: "2022-03-30", count: 4 }
      ];
  return (
      <Card style={styles.item}
      disabled={true}>
      <ContributionGraph
        values={commitsData}
        endDate={new Date("2022-04-29")}
        numDays={100}
        width={windowWidth}
        height={220}
        chartConfig={chartConfig}
        />
    </Card>
  );
};
const styles = StyleSheet.create({
    chart: {
      backgroundColor: 'white'
    },
    contentContainer: {
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    item: {
      marginVertical: 4,
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });
export default ContributionGraphCard;