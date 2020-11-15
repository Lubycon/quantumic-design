import React from 'react';
import Button from './index';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Button',
  component: Button,
  // argTypes: {},
} as Meta;

export const Default: React.FunctionComponent = () => <Button>기본 버튼</Button>;

// const Template: Story = (args) => <Button {...args}>기본 버튼</Button>;

// export const Default = Template.bind({});

// Default.args = {};
