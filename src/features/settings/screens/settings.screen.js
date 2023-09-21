import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Button, View } from "react-native";
import { Avatar, List } from "react-native-paper";
import styled, { useTheme } from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const LogoutIcon = () => <List.Icon color="black" icon="door" />;
const FavouritesIcon = () => <List.Icon color="black" icon="heart" />;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const theme = useTheme();
  return (
    <View>
      <AvatarContainer>
        <Avatar.Icon
          size={180}
          icon="human"
          backgroundColor={theme.colors.bg.secondary}
        />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={FavouritesIcon}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem title="Logout" left={LogoutIcon} onPress={onLogout} />
      </List.Section>
    </View>
  );
};
