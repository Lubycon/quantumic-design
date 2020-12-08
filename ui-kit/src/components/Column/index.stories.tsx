import React from 'react';
import Column from './index';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Column',
  component: Column,
} as Meta;

export const Default = () => <Column style={{ backgroundColor: 'red' }}>Column</Column>;
