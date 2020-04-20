import React from 'react';
import SearchInput from '../components/SearchInput';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SearchInput',
  decorators: [withKnobs],
};

const authors = {
  None: [],
  Leon: ['Leon'],
  Leo: ['Leo', 'Leon'],
  Marwin: ['Marwin', 'Marwin2000'],
};

export const Author = () => {
  return (
    <SearchInput
      value={text('value', '')}
      onChange={action('change')}
      searchResults={select('search results', authors, [])}
      onSelect={action('select')}
    />
  );
};
