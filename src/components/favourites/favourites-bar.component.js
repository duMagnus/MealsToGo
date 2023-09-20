import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding-vertical: 8px;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <>
      <FavouritesWrapper>
        <Spacer position="left" size="large">
          <Text variant="whiteLabel">Favourites</Text>
        </Spacer>
        <Spacer position="bottom" size="medium" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Spacer position="left" size="large" />
          {favourites.map((restaurant) => {
            const key = restaurant.name.split(" ").join("");
            return (
              <Spacer position="right" size="large" key={key}>
                <TouchableOpacity
                  onPress={() => {
                    onNavigate("RestaurantDetail", { restaurant });
                  }}
                >
                  <CompactRestaurantInfo
                    restaurant={restaurant}
                    isMap={false}
                  />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ScrollView>
        <Spacer position="bottom" size="medium" />
      </FavouritesWrapper>
    </>
  );
};
