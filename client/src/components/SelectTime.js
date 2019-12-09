import React from "react";
import styled from "styled-components";

const SelectBox = styled.select`
  display: block;
  width: 300px;
  margin: 5px auto;
  font-size: 14px;
`;

export default function Selector({ onChange, value }) {
  return (
    <div>
      <label>
        When should your pasta expire?
        <SelectBox onChange={onChange} value={value}>
          <option value={-1}>never</option>
          <option value={60000}>1 minute</option>
          <option value={180000}>3 minutes</option>
          <option value={600000}>10 minutes</option>
          <option value={3600000}>1 hours</option>
          <option value={21600000}>6 hours</option>
        </SelectBox>
      </label>
    </div>
  );
}
