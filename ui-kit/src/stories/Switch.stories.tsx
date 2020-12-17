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
      <ul style={{ padding: 0 }}>
        <li
          style={{ display: 'flex', alignItems: 'center', listStyle: 'none', marginBottom: '23px' }}
        >
          <Switch />
          <Text as="span" typography="content" style={{ marginLeft: '8px', color: colors.gray100 }}>
            Off
          </Text>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}>
          <Switch checked={true} />
          <Text as="span" typography="content" style={{ marginLeft: '8px', color: colors.gray100 }}>
            On
          </Text>
        </li>
      </ul>
    </div>
  );
};
