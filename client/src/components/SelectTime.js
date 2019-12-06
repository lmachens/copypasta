import React from "react";
import styled from "styled-components";

const SelectBox = styled.select`
  width: 300px;
  margin: 5px auto;
`;

export default function Selector({ onChange }) {
  return (
    <div>
      <label>
        When should your pasta expire?
        <br />
        <SelectBox onChange={onChange}>
          <option id="1" value="1">
            10 Minutes
          </option>
          <option id="2" value="2">
            1 Hour
          </option>
          <option id="3" value="3">
            6 Hours
          </option>
          <option id="4" value="4">
            never
          </option>
        </SelectBox>
      </label>
    </div>
  );
}
