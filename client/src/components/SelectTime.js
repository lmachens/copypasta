import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SelectBox = styled.select`
  display: block;
  margin: 5px 0px;
`;

function SelectTime({ onChange, value }) {
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

SelectTime.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
};

export default SelectTime;
