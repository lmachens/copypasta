import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
  color: ${(props) => (props.disabled ? '#666' : 'inherit')};
`;

function Checkbox({ disabled, onChange, checked, label }) {
  return (
    <Label disabled={disabled}>
      {label}
      <input
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
    </Label>
  );
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

export default Checkbox;
