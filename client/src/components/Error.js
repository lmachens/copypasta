import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 5px solid red;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  margin: 10px;
  padding: 20px;
  text-align: center;
`;

export default function Error({ children }) {
  return <Container>{children}</Container>;
}
