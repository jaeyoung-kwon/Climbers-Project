import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
const SearchArea = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  margin: 30px;
  border-radius: 20px;
  border-width: 1px;
`;
const Search = styled.TextInput`
  height: 40px;
  width: 70%;
`;
const SearchBtn = styled.TouchableOpacity`
  padding: 6px;
  margin-left: 4px;
`;
const SearchCancel = styled.TouchableOpacity`
  padding: 6px;
  margin-right: 4px;
`;

const SearchScreen = () => {
  const [searching, setSearching] = useState("");
  const onChangeText = (event) => {
    setSearching(event);
  };
  const onCancelText = () => {
    setSearching("");
  };
  const onSearchClimbGym = () => {};
  return (
    <Container>
      <SearchArea>
        <SearchBtn onPress={onSearchClimbGym}>
          <Ionicons name="search" size={24} color="black" />
        </SearchBtn>
        <Search
          onChangeText={onChangeText}
          value={searching}
          autoCapitalize="none"
          returnKeyType="search"
          onSubmitEditing={onSearchClimbGym}
        ></Search>
        <SearchCancel onPress={onCancelText}>
          <Ionicons name="close" size={24} color="black" />
        </SearchCancel>
      </SearchArea>
    </Container>
  );
};

export default SearchScreen;
