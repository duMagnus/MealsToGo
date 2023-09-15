import React, { useContext } from "react";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled, { useTheme } from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
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

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const theme = useTheme();
  return (
    <>
      <Container>
        <Search />
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
          )}
        </RestaurantListContainer>
      </Container>
    </>
  );
};
