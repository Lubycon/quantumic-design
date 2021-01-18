import React from 'react';
import Button from 'components/Button';
import Text from 'components/Text';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Button',
} as Meta;

const sizeList = ['small', 'medium', 'large'] as const;
const btnText = '버튼 텍스트';

export const Default = () => {
  return (
    <div>
      <Text as="div" typography="h5" style={{ marginBottom: '40px' }}>
        Rounded Button
      </Text>
      <ul style={{ listStyle: 'none' }}>
        {sizeList.map((size, index) => (
          <li
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 150px 150px',
              gridGap: '50px',
              marginBottom: '30px',
              alignItems: 'center',
            }}
          >
            <Text style={{ width: '100px' }}>{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
            <div>
              <Button size={size} key={index}>
                {btnText}
              </Button>
            </div>
            <div>
              <Button size={size} key={index + 'disabled'} disabled>
                {btnText}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
