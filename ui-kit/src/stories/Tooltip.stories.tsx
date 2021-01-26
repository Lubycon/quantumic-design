import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from 'components/Button';
import Tooltip, { TooltipPosition } from 'src/components/Tooltip';

export default {
  title: 'Lubycon UI Kit/Tooltip',
  component: Tooltip,
} as Meta;

const positions: TooltipPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'left',
  'right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

export const Default = () => {
  return (
    <div style={{ paddingTop: 40 }}>
      <Tooltip message="툴팁입니다.">
        <Button>버튼입니다</Button>
      </Tooltip>
    </div>
  );
};

export const Position = () => {
  return (
    <ul style={{ padding: 0, paddingTop: 40, margin: 0 }}>
      {positions.map((p) => (
        <li key={p} style={{ listStyle: 'none', marginBottom: 40 }}>
          <Tooltip message="툴팁입니다." position={p}>
            <Button>{p}</Button>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};
