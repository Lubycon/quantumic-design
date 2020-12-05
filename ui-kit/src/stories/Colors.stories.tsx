import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Text from 'components/Text';

export default {
  title: 'Lubycon UI Kit/Colors',
} as Meta;

const grayScale = {
  gray100: { hex: '#1B1B1C', rgb: 'rgb(27, 27, 28)' },
  gray90: { hex: '#2A2A2C', rgb: 'rgb(42, 42, 44)' },
  gray80: { hex: '#4C4D53', rgb: 'rgb(27, 27, 28)' },
  gray70: { hex: '#76777D', rgb: 'rgb(27, 27, 28)' },
  gray60: { hex: '#8E9095', rgb: 'rgb(27, 27, 28)' },
  gray50: { hex: '#B5B6B9', rgb: 'rgb(27, 27, 28)' },
  gray40: { hex: '#D0D1D3', rgb: 'rgb(27, 27, 28)' },
  gray30: { hex: '#E3E4E5', rgb: 'rgb(27, 27, 28)' },
  gray20: { hex: '#F3F4F5', rgb: 'rgb(27, 27, 28)' },
  gray10: { hex: '#FCFCFD', rgb: 'rgb(27, 27, 28)' },
};

const grayScaleNames = Object.keys(grayScale);

// const positive = ['green50', 'green40', 'green60'];
// const informative = ['green50', 'green40', 'green60'];
// const negative = ['green50', 'green40', 'green60'];
// const notice = ['green50', 'green40', 'green60'];

const box = (bgColor: string, width: string, height: string) => (
  <div style={{ width: width, height: height, backgroundColor: bgColor, borderRadius: '8px' }} />
);

export const GrayScale = () => {
  return (
    <div>
      <Text
        as="div"
        typography="h2"
        style={{ color: 'var(--lubycon-gray100)', marginBottom: '16px' }}
      >
        색상
      </Text>
      <ul
        style={{
          margin: 0,
          padding: 0,
          display: 'grid',
          gap: '10px',
          gridTemplateColumns: 'repeat(5, 246px)',
        }}
      >
        {grayScaleNames.map((name, index) => (
          <li key={index} style={{ listStyle: 'none' }}>
            <div
              style={{
                width: '246px',
                height: '160px',
                backgroundColor: grayScale[name].hex, // TODO
                borderRadius: '8px',
                padding: '14px',
                boxSizing: 'border-box',
              }}
            >
              <Text
                typography="subtitle"
                style={{ color: `var(--lubycon-gray${index > 4 ? '100' : '10'})` }}
              >
                {name.replace(/gray/g, 'gray ')}
              </Text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
