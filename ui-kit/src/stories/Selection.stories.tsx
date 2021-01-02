import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Selection from 'components/Selection';

export default {
  title: 'Lubycon UI Kit/Selection',
} as Meta;

export const Default = () => {
  return (
    <div>
      <Selection>
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </Selection>
    </div>
  );
};

export const Placeholder = () => {
  return (
    <div>
      <Selection placeholder="옵션을 선택하세요">
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </Selection>
    </div>
  );
};
