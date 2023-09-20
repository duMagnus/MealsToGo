import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { useTheme } from "styled-components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Colors, ActivityIndicator } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  const { colors } = useTheme();

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          mode="outlined"
          selectionColor={colors.ui.tertiary}
          cursorColor={colors.ui.tertiary}
          outlineColor={colors.ui.tertiary}
          activeOutlineColor={colors.ui.secondary}
        />
        <Spacer size="medium" />
        <AuthInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          textContentType="password"
          secureTextEntry
          selectionColor={colors.ui.tertiary}
          cursorColor={colors.ui.tertiary}
          outlineColor={colors.ui.tertiary}
          activeOutlineColor={colors.ui.secondary}
        />
        {error && (
          <Spacer size="large">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer size="large" />
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            onPress={() => {
              onLogin(email, password);
            }}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={colors.ui.secondary} />
        )}
      </AccountContainer>
      <Spacer>
        <AuthButton
          icon="arrow-left"
          onPress={() => navigation.navigate("Main")}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
