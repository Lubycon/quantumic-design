import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Text from 'components/Text';
import Switch from 'components/Switch';
import { colors } from '../constants/colors';

export default {
  title: 'Lubycon UI Kit/Switch',
} as Meta;

export const Default = () => {
  return (
    <div>
      <Text as="h2" typography="h2" style={{ color: colors.gray100 }}>
        스위치
      </Text>
      <div style={{ padding: 0 }}>
        <Switch label={'Off'} style={{ marginBottom: '23.17px' }} />
        <Switch defaultChecked={true} label={'On'} />
      </div>
    </div>
  );
};

export const Inline = () => {
  return (
    <div>
      <Switch display="inline" label="Off" style={{ marginRight: '20px' }} />
      <Switch defaultChecked={true} display="inline" label="On" />
    </div>
  );
};
