import React, { useContext, useEffect, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { Platform } from "react-native";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: ${Platform.OS === "android" ? "0" : "40px"};
  width: 100%;
`;

export const Search = () => {
  const theme = useTheme();
  const { keyword, search } = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarContainer>
      <Searchbar
        elevation={5}
        placeholder="Location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        iconColor={theme.colors.ui.quaternary}
        rippleColor={theme.colors.ui.quaternary}
        selectionColor={theme.colors.ui.quaternary}
      />
    </SearchBarContainer>
  );
};
