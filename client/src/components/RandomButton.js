import React from 'react';
import Button from './Button';

export default function RandomButton(props) {
  return (
    <Button {...props}>
      get random pasta{' '}
      <span role="img" aria-label="random-emoji">
        🍝
      </span>
    </Button>
  );
}
