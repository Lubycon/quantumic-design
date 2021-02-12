import React from 'react';
import { Radio } from 'src';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Radio',
  component: Radio,
} as Meta;

export const Default = () => {
  return (
    <div>
      <Radio label="라디오1" name="radio" />
      <Radio label="라디오2" name="radio" />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div>
      <Radio label="라디오1" name="radio" />
      <Radio label="라디오2" name="radio" />
      <Radio label="라디오3" name="radio" disabled />
      <Radio label="라디오4" name="radio" defaultChecked={true} disabled />
    </div>
  );
};

export const Inline = () => {
  return (
    <div>
      <Radio display="inline" label="라디오1" name="radio" style={{ marginRight: 16 }} />
      <Radio display="inline" label="라디오2" name="radio" />
    </div>
  );
};
