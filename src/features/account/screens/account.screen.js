import React, { useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "styled-components";

export const AccountScreen = ({ navigation }) => {
  const { isLoading } = useContext(AuthenticationContext);
  const { colors } = useTheme();

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={colors.ui.secondary} />
        )}

        <Spacer size="large" />
        {!isLoading ? (
          <AuthButton
            icon="email"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={colors.ui.secondary} />
        )}
      </AccountContainer>
    </AccountBackground>
  );
};
