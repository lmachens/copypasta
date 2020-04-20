import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Heart from '../icons/Heart';

export default {
  title: 'Button Navigations',
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <BottomNavigation
      links={[
        {
          label: 'New',
          Icon: Heart,
        },
        {
          label: 'List',
          Icon: Heart,
        },
        {
          label: 'User',
          Icon: Heart,
        },
      ]}
      value={text('value', 'New')}
      onItemClick={action('item-click')}
    />
  );
};
