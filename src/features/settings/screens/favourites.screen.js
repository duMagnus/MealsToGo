import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import {
  RestaurantList,
  RestaurantListContainer,
} from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const NoFavouritesArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <RestaurantListContainer>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </RestaurantListContainer>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
