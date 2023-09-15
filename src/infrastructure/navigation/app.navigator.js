import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Text, View } from "react-native";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const TAB_ICON = {
  RestaurantsNavigator: ["restaurant", "restaurant-outline"],
  Map: ["map", "map-outline"],
  Settings: ["settings", "settings-outline"],
};

const SettingsScreen = () => (
  <View>
    <Text>Settings!</Text>
  </View>
);

const createScreenOptions = ({ route }, theme) => {
  return {
    tabBarIcon: ({ size, color, focused }) => {
      const iconName = TAB_ICON[route.name][focused ? 0 : 1];
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: theme.colors.ui.tertiary,
    tabBarInactiveTintColor: theme.colors.ui.secondary,
    tabBarShowLabel: false,
    headerShown: false,
  };
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(props) => createScreenOptions(props, theme)}
      >
        <Tab.Screen
          name="RestaurantsNavigator"
          component={RestaurantsNavigator}
        />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};