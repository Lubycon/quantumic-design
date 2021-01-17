import React from 'react';
import Button from 'components/Button';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Button',
} as Meta;

const SIZE = ['Small', 'Medium', 'Large'];
const STATUS = ['Normal', 'Hover', 'Active', 'Disabled'];
const TEXT = '버튼 텍스트';

export const Default = () => {
  return (
    <div>
      <div>Rounded Button</div>
      <Button>{TEXT}</Button>
    </div>
  );
};
