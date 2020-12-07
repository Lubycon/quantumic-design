import React, { useContext } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Text from 'components/Text';
import ColorContext from '../context/Colors';

export default {
  title: 'Lubycon UI Kit/Colors',
} as Meta;

const grayScaleNames = [
  'gray100',
  'gray90',
  'gray80',
  'gray70',
  'gray60',
  'gray50',
  'gray40',
  'gray30',
  'gray20',
  'gray10',
];

type tSemanticColorMap = {
  [key: string]: Array<string>;
};

const semanticColorMap: tSemanticColorMap = {
  positive: ['green50', 'green40', 'green60'],
  informative: ['blue50', 'blue40', 'blue60'],
  negative: ['red50', 'red40', 'red60'],
  notice: ['yellow50', 'yellow40', 'yellow60'],
};

const semanticColorNames = Object.keys(semanticColorMap);

type tIndexMap = {
  [key: number]: string;
};

const indexMap: tIndexMap = {
  0: 'a',
  1: 'b',
  2: 'c',
};

export const Default = () => {
  const { gray100, gray10 } = useContext(ColorContext);

  return (
    <div>
      <Text as="div" typography="subtitle" style={{ color: gray100, marginBottom: '24px' }}>
        회색 명암(Gray Scale)
      </Text>
      <ul
        style={{
          margin: '0 0 120px 0',
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
                backgroundColor: `var(--lubycon-${name})`,
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

      <Text as="div" typography="subtitle" style={{ color: gray100, marginBottom: '24px' }}>
        의미론적 색상(Semantic Color)
      </Text>
      <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: 'repeat(2, 615px)' }}>
        {semanticColorNames.map((name, index) => (
          <ul
            key={index}
            style={{
              margin: 0,
              padding: 0,
              display: 'grid',
              gap: '10px',
              gridTemplateColumns: '302px 302px',
              gridTemplateRows: '75px 75px',
              gridTemplateAreas: `
                'a b'
                'a c'
              `,
            }}
          >
            {semanticColorMap[name].map((colorName, colorIndex) => (
              <li
                key={colorIndex}
                style={{
                  listStyle: 'none',
                  width: '302px',
                  height: `${/50/g.test(colorName) ? '160px' : '75px'}`,
                  backgroundColor: `var(--lubycon-${colorName})`,
                  borderRadius: '8px',
                  padding: '14px',
                  boxSizing: 'border-box',
                  gridArea: `${indexMap[colorIndex]}`,
                }}
              >
                <Text as="div" typography="subtitle" style={{ color: 'var(--lubycon-gray10' }}>
                  {/50/g.test(colorName) ? name[0].toUpperCase() + name.slice(1) : ''}
                </Text>
                <Text
                  typography="caption"
                  style={{ color: `${/40/g.test(colorName) ? gray100 : gray10}` }}
                >
                  {colorName}
                </Text>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
