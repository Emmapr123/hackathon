import { getWeatherForecast } from "../../functions/weather-api"
import { StyleSheet, Text, View } from 'react-native';

export const DailyWeatherForecast = () => {
    console.log('heelo world', getWeatherForecast())

    return (
        <Text></Text>
    )
}