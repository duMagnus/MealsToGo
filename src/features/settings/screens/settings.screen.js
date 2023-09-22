import React, { useCallback, useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TouchableOpacity, View } from "react-native";
import { Avatar, List } from "react-native-paper";
import styled, { useTheme } from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

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
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser, curPhoto) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
      // eslint-disable-next-line prettier/prettier
    }, [user])
  );

  return (
    <View>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon
              size={180}
              icon="human"
              backgroundColor={theme.colors.bg.secondary}
            />
          ) : (
            <Avatar.Image
              size={180}
              source={{
                uri: photo,
              }}
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={FavouritesIcon}
          onPress={() => {
            navigation.navigate("Favourites");
          }}
        />
        <SettingsItem title="Logout" left={LogoutIcon} onPress={onLogout} />
      </List.Section>
    </View>
  );
};
