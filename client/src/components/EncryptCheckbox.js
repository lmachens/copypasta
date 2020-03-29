import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  margin: 10px 0px 5px 0px;
`;

const Checkbox = styled.input`
  margin-left: 10px;
`;

export default function EncryptCheckbox(value, onChange) {
  return (
    <Label>
      Encrypt my pasta:
      <Checkbox value={value} onChange={onChange} type="checkbox" />
    </Label>
  );
}
