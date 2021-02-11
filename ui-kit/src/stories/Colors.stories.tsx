import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Text from 'components/Text';
import { colors, ColorProperty, SemanticColor } from '../constants/colors';

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
] as const;

type SemanticColorMap = {
  [key in SemanticColor]: Array<ColorProperty>;
};

const semanticColors: SemanticColorMap = {
  positive: ['green50', 'green40', 'green60'],
  informative: ['blue50', 'blue40', 'blue60'],
  negative: ['red50', 'red40', 'red60'],
  notice: ['yellow50', 'yellow40', 'yellow60'],
};

const semanticColorNames = Object.keys(semanticColors) as Array<SemanticColor>;

type IndexMap = {
  [key: number]: 'a' | 'b' | 'c';
};

const indexMap: IndexMap = {
  0: 'a',
  1: 'b',
  2: 'c',
};

export const Default = () => {
  return (
    <div>
      <Text as="div" typography="subtitle" style={{ color: colors.gray100, marginBottom: '24px' }}>
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

      <Text as="div" typography="subtitle" style={{ color: colors.gray100, marginBottom: '24px' }}>
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
            {semanticColors[name].map((colorName, colorIndex) => (
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
                  style={{ color: `${/40/g.test(colorName) ? colors.gray100 : colors.gray10}` }}
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
