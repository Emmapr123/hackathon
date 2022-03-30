import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Card, List, Icon, Text, Button, Modal } from "@ui-kitten/components";
import HorizontalBarGraph from "@chartiful/react-native-horizontal-bar-graph";
import LottieView from "lottie-react-native";

const windowWidth = Dimensions.get("window").width;
const StarIcon = (props) => <Icon {...props} name="star" />;
const InsightItemList = ({ data }) => {
  const [visible, setVisible] = React.useState(false);

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">{info.item.title}</Text>
      <Text style={{ marginTop: 10 }}>{info.item.subTitle}</Text>
    </View>
  );

  const renderItemFooter = (footerProps) => (
    <Button
      onPress={() => setVisible(true)}
      appearance="outline"
      accessoryLeft={StarIcon}
      status="warning"
      size="small"
    >
      Saving Tips
    </Button>
  );

  const renderItem = (info) => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}
    >
      <HorizontalBarGraph
        style={styles.chart}
        data={[55, 100]}
        labels={["Actual", "Target"]}
        width={windowWidth - 80}
        height={100}
        barRadius={5}
        barColor={"#E7A234"}
        baseConfig={{
          hasYAxisBackgroundLines: true,
          xAxisLabelStyle: {
            rotation: 0,
            fontSize: 12,
            width: 70,
            yOffset: 4,
            xOffset: -15,
          },
          yAxisLabelStyle: {
            rotation: 40,
            fontSize: 13,
            prefix: "£",
            position: "bottom",
            xOffset: 10,
            decimals: 0,
            height: 40,
          },
        }}
      />
      <View style={{ height: 40, marginTop: -100, alignItems: "center" }}>
        <LottieView
          resizeMode={"cover"}
          style={{ height: 50 }}
          source={require("./../../assets/ovo-heart.json")}
          autoPlay
          loop
        />
      </View>

      {/*<Card style={styles.card} status='success'>
                <Text>Awesome! You're right on track!</Text>
                </Card>
                <Card style={styles.card} status='warning'>
                <Text>Opps! Looks like you're overbudget, checkout out our energy saving tips below</Text>
        </Card>*/}
    </Card>
  );
  return (
    <>
      <List
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={renderItem}
      />
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text style={styles.header}>Go with the flow</Text>

          <Text style={styles.body}>
            Start saving money and energy while taking a shower: install a
            water-efficient showerhead or a shower flow reducer.  The best bit?
            These are usually free – check with your water company.
          </Text>

          <Button onPress={() => setVisible(false)} style={styles.button}>
            DISMISS
          </Button>
        </Card>
      </Modal>
    </>
  );
};

export default InsightItemList;

const styles = StyleSheet.create({
  chart: {
    backgroundColor: "white",
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
    // height: 350,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    height: 53,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#0D8426",
    marginTop: 10,
    borderWidth: 0,
  },
  header: {
    fontSize: 28,
    marginVertical: 12,
    fontWeight: "700",
  },
  body: {
    fontSize: 18,
    // marginTop: 12,
    fontWeight: "400",
    paddingBottom: 40,
  },
});
