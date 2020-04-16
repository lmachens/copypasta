import React from 'react';
import Error from '../components/Error';
import Button from '../components/Button';

export default {
  title: 'Error',
};

export const Default = () => <Error>Oh no! Something bad happend :(</Error>;
export const WithButton = () => (
  <Error>
    Oh no! Something bad happend :( <Button>Try again</Button>
  </Error>
);
