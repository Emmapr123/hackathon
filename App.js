import { StyleSheet, View } from "react-native";
import { SliderScreen } from "./components/screens/slider-screen";

export default function App() {
  return (
    <View style={styles.container}>
      <SliderScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 28,
  },
});
