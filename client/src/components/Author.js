import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: #a0a0a0;
`;

export default function Author({ name }) {
  return <StyledDiv>Author: {name}</StyledDiv>;
}
