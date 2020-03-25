import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  color: #a0a0a0;
`;

export default function Author({ name }) {
  return <Container>Author: {name}</Container>;
}
