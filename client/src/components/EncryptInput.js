import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  width: 230px;
  height: 20px;
  border: 1.5px solid #8b7e7e;
  border-radius: 5px;
  margin: 5px 0px 10px 0px;
  padding-left: 7px;
  outline: none;
`;

export default function PasswordInput(props) {
  return <Input placeholder="Enter password..." type="password" {...props} />;
}
