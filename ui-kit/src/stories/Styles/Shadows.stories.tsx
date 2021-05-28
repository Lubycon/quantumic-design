import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import classnames from 'classnames';
import { Text } from 'src';

export default {
  title: 'Styles/Shadows',
} as Meta;

const shadows = ['0px', '2px 드랍다운', '3px 버튼, 카드', '6px 토스트', '8px 탭', '24px 모달 팝업'];

export const Default = () => {
  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {shadows.map((shadow, index) => (
        <li key={index} style={{ listStyle: 'none', marginBottom: 30 }}>
          <div
            className={classnames([`lubycon-shadow--${index}`])}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              height: 80,
              borderRadius: 8,
              backgroundColor: '#fcfcfd',
              padding: 34,
            }}
          >
            <Text typography="p2">{shadow}</Text>
          </div>
        </li>
      ))}
    </ul>
  );
};
