import React from 'react';
import { Button, Text, Column, Row } from 'src';
import { Meta } from '@storybook/react/types-6-0';
import { SemanticColor } from 'src/constants/colors';

export default {
  title: 'Components/Button',
} as Meta;

const sizeList = ['small', 'medium', 'large'] as const;
const btnText = '버튼 텍스트';

export const Default = () => {
  return (
    <div>
      {sizeList.map((size, index) => (
        <Row key={index} alignItems="center" style={{ marginBottom: 20 }}>
          <Column xs="auto" style={{ width: '100px', marginRight: 40 }}>
            <Text>{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
          </Column>
          <Column>
            <Button size={size} key={index}>
              {btnText}
            </Button>
          </Column>
          <Column>
            <Button size={size} key={index + 'disabled'} disabled>
              {btnText}
            </Button>
          </Column>
        </Row>
      ))}
    </div>
  );
};

const semanticColors: SemanticColor[] = ['informative', 'negative', 'notice', 'positive'];
export const Types = () => {
  return (
    <div>
      {semanticColors.map((type, index) => (
        <Row key={index} alignItems="center" style={{ marginBottom: 20 }}>
          <Column xs="auto" style={{ width: '100px', marginRight: 40 }}>
            <Text>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
          </Column>
          <Column>
            <Button key={index} type={type}>
              {btnText}
            </Button>
          </Column>
        </Row>
      ))}
    </div>
  );
};
