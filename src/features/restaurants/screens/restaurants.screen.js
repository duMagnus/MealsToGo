import React, { useContext, useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled, { useTheme } from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import {
  RestaurantList,
  RestaurantListContainer,
} from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animations";
import { LocationContext } from "../../../services/location/location.context";
import { Text } from "../../../components/typography/text.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const {
    error: restaurantError,
    restaurants,
    isLoading,
  } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

  const theme = useTheme();
  return (
    <>
      <Container>
        <Search
          isFavouritesToggled={isFavouritesToggled}
          onFavouritesToggle={() =>
            setIsFavouritesToggled(!isFavouritesToggled)
          }
        />
        {isFavouritesToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        <RestaurantListContainer>
          {isLoading ? (
            <Spacer position={"top"} size={"xlarge"}>
              <ActivityIndicator
                animating={true}
                color={theme.colors.ui.primary}
                size={40}
              />
            </Spacer>
          ) : (
            <>
              {!!restaurantError || !!locationError ? (
                <Spacer position="top" size="large">
                  <Text variant="whiteError">
                    Something went wrong, please try again later.
                  </Text>
                </Spacer>
              ) : (
                <RestaurantList
                  data={restaurants}
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
                          <FadeInView>
                            <RestaurantInfoCard restaurant={item} />
                          </FadeInView>
                        </TouchableOpacity>
                      </Spacer>
                    );
                  }}
                  keyExtractor={(item, index) => `${item.name}-${index}`}
                />
              )}
            </>
          )}
        </RestaurantListContainer>
      </Container>
    </>
  );
};
