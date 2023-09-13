import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { colors } from "./src/utils/colors";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.frenchGray}
        barStyle={"dark-content"}
      />
      <RestaurantsScreen />
    </>
  );
}
