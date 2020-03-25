import React from "react";
import styled from "@emotion/styled";

const DivStyled = styled.div`
  margin: 10px;
  color: #a0a0a0;
`;

export default function DateTime({ date }) {
  return (
    <DivStyled>
      {date.toLocaleDateString()} - {date.toLocaleTimeString()}
    </DivStyled>
  );
}
