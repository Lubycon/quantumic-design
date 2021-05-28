import { Typographys, FontWeights } from 'components/Text/types';

export const typographyNames: { [key in Typographys]: string } = {
  h1: '머릿말 1',
  h2: '머릿말 2',
  h3: '머릿말 3',
  h4: '머릿말 4',
  h5: '머릿말 5',
  h6: '머릿말 6',
  subtitle: '부제',
  p1: '본문 1',
  p2: '본문 2',
  caption: '캡션',
};

export const fontWeightNames: { [key in FontWeights]: string } = {
  light: '노토 산스 KR Light',
  regular: '노토 산스 KR Regular',
  bold: '노토 산스 KR Bold',
  black: '노토 산스 KR Black',
};
