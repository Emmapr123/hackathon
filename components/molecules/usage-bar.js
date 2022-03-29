import { View } from "react-native";
import { AnimatedBar } from "../atoms/animated-bar";

const UsageBar = () => {
  return (
    <View>
      <AnimatedBar
        animated={false}
        length={(20 / 40) * 100}
        color={"#CDC7E5"}
        style={views}
        axis={"height"}
      />
    </View>
  );
};

export { UsageBar };
