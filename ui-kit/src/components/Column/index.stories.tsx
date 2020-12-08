import React from 'react';
import Column from './index';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Column',
  component: Column,
} as Meta;

export const Default = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Column style={{ backgroundColor: 'red' }} md={4}>
      Column
    </Column>
    <Column style={{ backgroundColor: 'blue' }} md={8}>
      Column
    </Column>
  </div>
);
