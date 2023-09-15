import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  border-radius: ${(props) => props.theme.sizes[1]};
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]} 0 0 0;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Section = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[1]} 0;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;
