import React from 'react';
import Text from './index';
import { Meta } from '@storybook/react/types-6-0';
import { typographys, Typographys, FontWeights, fontWeights } from './types';

export default {
  title: 'Lubycon UI Kit/Text',
  component: Text,
} as Meta;

const typographyNames: { [key in Typographys]: string } = {
  h1: '머릿말 1',
  h2: '머릿말 2',
  h3: '머릿말 3',
  h4: '머릿말 4',
  h5: '머릿말 5',
  h6: '머릿말 6',
  subtitle: '부제',
  button: '버튼',
  content: '본문 1',
  content2: '본문 2',
  caption: '캡션',
};

const fontWeightNames: { [key in FontWeights]: string } = {
  light: '노토 산스 KR Light',
  regular: '노토 산스 KR Regular',
  bold: '노토 산스 KR Bold',
  black: '노토 산스 KR Black',
};

export const Default = () => {
  return (
    <ul>
      {typographys.map((typography) => (
        <li style={{ listStyle: 'none' }} key={typography}>
          <Text typography={typography}>{typographyNames[typography]}</Text>
        </li>
      ))}
    </ul>
  );
};

export const FontWeight = () => {
  return (
    <ul>
      {fontWeights.map((fontWeight) => (
        <li style={{ listStyle: 'none' }} key={fontWeight}>
          <Text fontWeight={fontWeight}>{fontWeightNames[fontWeight]}</Text>
        </li>
      ))}
    </ul>
  );
};
