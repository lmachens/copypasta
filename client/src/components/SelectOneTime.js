import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CheckBox = styled.div`
  display: block;
  width: 500px;
  margin: 15px 0;
  text-align: center;
  font-size: 16px;
`;

function SelectOneTime({ onChange, value }) {
  return (
    <CheckBox onChange={onChange} value={value}>
      <legend>Should your pasta be available for only one view?</legend>
      <input type="checkbox" />
      <label>Yes, that sounds cool</label>
    </CheckBox>
  );
}

SelectOneTime.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.bool
};

export default SelectOneTime;
