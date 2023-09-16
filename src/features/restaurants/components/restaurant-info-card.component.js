import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  Info,
  Rating,
  RestaurantCard,
  Section,
  SectionEnd,
} from "./restaurant-info-styles";
import { Favourite } from "../../../components/favourites/favourites.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://img.freepik.com/free-photo/flat-lay-assortment-with-delicious-brazilian-food_23-2148739179.jpg?w=996&t=st=1694620701~exp=1694621301~hmac=111d9ec50499927dd5611aa0cd22dc8adf0285d2bcd2414c01bf0dfd18074aa7",
    ],
    vicinity = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <Favourite restaurant={restaurant} />
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                width={16}
                height={16}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="medium">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{vicinity}</Text>
      </Info>
    </RestaurantCard>
  );
};
