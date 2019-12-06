import React from "react";
import styled from "styled-components";

const SelectBox = styled.select`
  width: 300px;
  margin: 5px auto;
  font-size: 14px;
`;

export default function Selector({ onChange }) {
  return (
    <div>
      <label>
        When should your pasta expire?
        <br />
        <SelectBox onChange={onChange}>
          <option id="1" value={0}>
            never
          </option>
          <option id="2" value={600000}>
            10 Minutes
          </option>
          <option id="3" value={3600000}>
            1 Hour
          </option>
          <option id="4" value={21600000}>
            6 Hours
          </option>
          <option id="5" value={60000}>
            1 minute
          </option>
          <option id="6" value={180000}>
            3 minute
          </option>
        </SelectBox>
      </label>
    </div>
  );
}
