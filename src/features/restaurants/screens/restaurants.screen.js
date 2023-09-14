import React, { useContext } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled, { useTheme } from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchBarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantListContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  flex: 1;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const theme = useTheme();
  return (
    <>
      <Container>
        <SearchBarContainer>
          <Searchbar placeholder="Search" />
        </SearchBarContainer>
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
            <RestaurantList
              data={restaurants}
              renderItem={({ item }) => {
                return (
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                );
              }}
              keyExtractor={(item) => item.name}
            />
          )}
        </RestaurantListContainer>
      </Container>
    </>
  );
};
