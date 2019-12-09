import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #a0a0a0;
`;

export default function Author({ name }) {
  return <Container>Author: {name}</Container>;
}
