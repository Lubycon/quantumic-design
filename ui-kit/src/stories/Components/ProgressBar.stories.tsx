import React, { useEffect, useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ProgressBar, Text } from 'src';
import { ProgressBarLabelPosition } from 'src/components/ProgressBar';

export default {
  title: 'Components/ProgressBar',
} as Meta;

const MAX_VALUE = 100;
const getProgressValue = (value: number) => (value === MAX_VALUE ? 0 : value + 1);

export const Default = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setValue(getProgressValue), 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <ProgressBar value={value} max={MAX_VALUE} />
    </div>
  );
};

const labelPosition: ProgressBarLabelPosition[] = ['top', 'bottom', 'left', 'right'];
export const Label = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setValue(getProgressValue), 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {labelPosition.map((position) => (
        <li style={{ listStyle: 'none', marginBottom: 16 }} key={position}>
          <Text fontWeight="bold">{position}</Text>
          <ProgressBar value={value} max={MAX_VALUE} showLabel={true} labelPosition={position} />
        </li>
      ))}
    </ul>
  );
};

export const LabelFormatter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setValue(getProgressValue), 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <ProgressBar
        style={{ marginBottom: 16 }}
        value={value}
        max={MAX_VALUE}
        showLabel={true}
        labelFormatter={(value) => `${value}/${100}`}
      />
      <ProgressBar
        style={{ marginBottom: 16 }}
        value={value}
        max={MAX_VALUE}
        showLabel={true}
        labelFormatter={(value) =>
          value > MAX_VALUE * 0.5 ? '거의 다 왔어요!' : `현재 값은 ${value}입니다`
        }
      />
      <ProgressBar
        style={{ marginBottom: 16 }}
        value={value}
        max={MAX_VALUE}
        showLabel={true}
        labelFormatter={(value) => `${Math.floor((value / MAX_VALUE) * 100)}%`}
      />
    </>
  );
};
