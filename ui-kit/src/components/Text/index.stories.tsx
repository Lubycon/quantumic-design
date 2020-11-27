import React from 'react';
import Text from './index';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Text',
  component: Text,
} as Meta;

export const Default = () => {
  return (
    <Text as="a" href="https://github.io">
      안녕하세요
    </Text>
  );
};
