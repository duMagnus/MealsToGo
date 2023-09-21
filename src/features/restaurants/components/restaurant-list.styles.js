import { FlatList } from "react-native";
import styled from "styled-components/native";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantListContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  flex: 1;
`;
