import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsNavigator } from "./settings.navigator";

const TAB_ICON = {
  RestaurantsNavigator: ["restaurant", "restaurant-outline"],
  Map: ["map", "map-outline"],
  SettingsNavigator: ["settings", "settings-outline"],
};

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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={(props) => createScreenOptions(props, theme)}
          >
            <Tab.Screen
              name="RestaurantsNavigator"
              component={RestaurantsNavigator}
            />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen
              name="SettingsNavigator"
              component={SettingsNavigator}
            />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
