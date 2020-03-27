import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CheckBox = styled.div`
  margin: 15px 0;
  text-align: center;
`;

function SelectOneTime({ onChange, isActive }) {
  return (
    <CheckBox onChange={onChange} checked={isActive}>
      <legend>Should your pasta be available for only one view?</legend>
      <input type="checkbox" />
      <label>Yes, that sounds cool</label>
    </CheckBox>
  );
}

SelectOneTime.propTypes = {
  onChange: PropTypes.func,
  isActive: PropTypes.bool
};

export default SelectOneTime;
