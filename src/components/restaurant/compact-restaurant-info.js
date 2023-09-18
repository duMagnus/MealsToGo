import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { Spacer } from "../spacer/spacer.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 80px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 120px;
  min-height: 140px;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Spacer position="bottom" size="medium" />
      <Text center variant="caption">
        {restaurant.name}
      </Text>
    </Item>
  );
};
