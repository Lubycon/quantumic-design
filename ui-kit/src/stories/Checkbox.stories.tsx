import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Checkbox from 'components/Checkbox';

export default {
  title: 'Lubycon UI Kit/Checkbox',
} as Meta;

export const Default = () => {
  return (
    <div>
      <Checkbox label={'체크박스1'} />
      <Checkbox label={'체크박스2'} />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div>
      <Checkbox label={'체크박스'} />
      <Checkbox label={'체크박스2'} />
      <Checkbox label={'체크박스3'} disabled />
      <Checkbox label={'체크박스4'} disabled defaultChecked={true} />
    </div>
  );
};

export const inline = () => {
  return (
    <div>
      <Checkbox label={'체크박스'} display="inline" style={{ marginRight: '20px' }} />
      <Checkbox label={'체크박스2'} display="inline" />
    </div>
  );
};
