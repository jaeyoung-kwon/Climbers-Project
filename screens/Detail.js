import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text``;

const Detail = ({ route: { params } }) => {
  return (
    <Container>
      <Title>{params.latitude}</Title>
      <Title>{params.longitude}</Title>
    </Container>
  );
};

export default Detail;
