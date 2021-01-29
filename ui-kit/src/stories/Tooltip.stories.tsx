import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from 'components/Button';
import Tooltip from 'src/components/Tooltip';
import { useState } from 'react';
import { TooltipPosition } from 'src/components/Tooltip/types';

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
      <Tooltip show={true} message="툴팁입니다.">
        <Button>버튼입니다</Button>
      </Tooltip>
    </div>
  );
};

const TooltipButton = ({ children }: { children: TooltipPosition }) => {
  const [show, setShow] = useState(false);
  return (
    <Tooltip show={show} message="툴팁입니다." position={children}>
      <Button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </Button>
    </Tooltip>
  );
};
export const Position = () => {
  return (
    <ul style={{ padding: 100, margin: 0 }}>
      {positions.map((p) => (
        <li key={p} style={{ listStyle: 'none', marginBottom: 60 }}>
          <TooltipButton>{p}</TooltipButton>
        </li>
      ))}
    </ul>
  );
};
