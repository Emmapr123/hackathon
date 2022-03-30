import React from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { Card, Icon, Text, Button, Modal } from "@ui-kitten/components";
import HorizontalBarGraph from "@chartiful/react-native-horizontal-bar-graph";
import LottieView from "lottie-react-native";

const windowWidth = Dimensions.get("window").width;
const StarIcon = (props) => <Icon {...props} name="star" />;
const InsightItem = ({ data, insights }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.item}>
      <View style={{ marginTop: 20, height: 75, marginBottom: 15 }}>
        <Text category="h6">{data.title}</Text>
        <Text style={{ marginTop: 10 }}>{data.subTitle}</Text>
      </View>
      <View>
        <HorizontalBarGraph
          style={styles.chart}
          data={[insights.actual, insights.budget]}
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
      </View>
      <View style={{ height: 40, marginTop: -100, alignItems: "center" }}>
        <LottieView
          resizeMode={"cover"}
          style={{ height: 50 }}
          source={require("./../../assets/ovo-heart.json")}
          autoPlay
          loop
        />
      </View>
      <Button
        onPress={() => setVisible(true)}
        appearance="outline"
        accessoryLeft={StarIcon}
        status="warning"
        size="small"
      >
        Saving Tips
      </Button>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: 'center'
            }}
          >
            <Text style={styles.header}>{data.tipTitle}</Text>
            <Image
              source={require("./../../assets/bulb-icon.png")}
              height={20}
              width={20}
            />
          </View>

          <Text style={styles.body}>{data.tipBody}</Text>

          <Button onPress={() => setVisible(false)} style={styles.button}>
            DISMISS
          </Button>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 4,
    height: 300,
    backgroundColor: "white",
    // width: '100%',
    paddingHorizontal: 15,
    marginHorizontal: 10,
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

export { InsightItem };
