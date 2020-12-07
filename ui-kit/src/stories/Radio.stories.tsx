import React from 'react';
import Radio from 'components/Radio';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Radio',
  component: Radio,
} as Meta;

export const Default = () => {
  return (
    <div>
      <Radio label="라디오1" />
      <Radio label="라디오2" />
    </div>
  );
};
