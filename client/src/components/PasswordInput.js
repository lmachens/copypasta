import React from 'react';
import Input from './Input';

export default function PasswordInput(props) {
  return <Input placeholder="Enter password..." type="password" {...props} />;
}
