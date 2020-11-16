import React from 'react';
import Button from './index';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Button',
  component: Button,
} as Meta;

export const Default: React.FC = () => <Button>기본 버튼</Button>;
