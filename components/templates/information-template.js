import { View } from "react-native";
import { BudgetTracker } from "../molecules/budget-tracker";

const sliderTemplate = () => {

    return(
        <View>
            <BudgetTracker title={'Showers per week'} />
        </View>
    )
};

export { sliderTemplate }