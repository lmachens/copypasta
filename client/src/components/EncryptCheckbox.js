import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
  margin: 10px 0px 5px 0px;
`;

const Checkbox = styled.input`
  margin-left: 10px;
`;

export default function EncryptCheckbox({ value, onChange, label }) {
  return (
    <Label>
      {label}
      <Checkbox checked={value} onChange={onChange} type="checkbox" />
    </Label>
  );
}

EncryptCheckbox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string
};
