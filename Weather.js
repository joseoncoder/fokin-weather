import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    colors: ["#000000", "#e74c3c"],
    title: "태풍",
    subTitle: "집에서 꼼ㅉㅏㄱ ㅁ ㅏ.."
  },
  Drizzle: {
    iconName: "weather-rainy",
    colors: ["#757F9A", "#D7DDE8"],
    title: "이슬비",
    subTitle: "이슬비오면 막걸리"
  },
  Rain: {
    iconName: "weather-pouring",
    colors: ["#000046", "#1CB5E0"],
    title: " 비 ",
    subTitle: "비오면 막걸리"
  },
  Snow: {
    iconName: "weather-snowy",
    colors: ["#5C258D", "#4389A2"],
    title: " 눈 ",
    subTitle: "낭만이 내린다"
  },
  Atmosphere: {
    iconName: "",
    colors: ["#757F9A", "#D7DDE8"],
    title: "?",
    subTitle: "?"
  },
  Clear: {
    iconName: "weather-sunny",
    colors: ["#2BC0E4", "#EAECC6"],
    title: "깨끗",
    subTitle: "깨끗하니까 밖으로"
  },
  Clouds: {
    iconName: "weather-cloudy",
    colors: ["#757F9A", "#D7DDE8"],
    title: "구름",
    subTitle: "구름많은 날이다"
  },
  Haze: {
    iconName: "weather-fog",
    colors: ["#1F1C2C", "#928DAB"],
    title: "안개",
    subTitle: "신비로운 분위기"
  },
  Mist: {
    iconName: "weather-fog",
    colors: ["#1F1C2C", "#928DAB"],
    title: "안개",
    subTitle: "신비로운 분위기"
  },
  Dust: {
    iconName: "weather-fog",
    colors: ["#1F1C2C", "#928DAB"],
    title: "먼지",
    subTitle: "집에만 있자"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].colors}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={97}
          name={weatherOptions[condition].iconName}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp} °</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 28,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 43,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "right"
  },
  subTitle: {
    color: "white",
    fontWeight: "200",
    textAlign: "right"
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1
  }
});

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};
