import React from "react";
import styled from "styled-components";

const SelectBox = styled.select`
  display: block;
  width: 300px;
  margin: 5px auto;
  font-size: 14px;
`;

export default function Selector({ onChange }) {
  return (
    <div>
      <label>
        When should your pasta expire?
        <SelectBox onChange={onChange}>
          <option value={0}>never</option>
          <option value={60000}>1 minute</option>
          <option value={180000}>3 minute</option>
          <option value={600000}>10 Minutes</option>
          <option value={3600000}>1 Hour</option>
          <option value={21600000}>6 Hours</option>
        </SelectBox>
      </label>
    </div>
  );
}
