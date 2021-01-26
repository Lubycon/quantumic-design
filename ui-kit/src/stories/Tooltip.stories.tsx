import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from 'components/Button';
import Tooltip from 'src/components/Tooltip';

export default {
  title: 'Lubycon UI Kit/Tooltip',
  component: Tooltip,
} as Meta;

export const Default = () => {
  return (
    <div>
      <Tooltip message="툴팁입니다.">
        <Button>버튼입니다</Button>
      </Tooltip>
    </div>
  );
};
