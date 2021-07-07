import { ColorProperty, SemanticColor } from 'src/constants/colors';

export const grayScaleNames = [
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
export const semanticColorNames: SemanticColorMap = {
  positive: ['green50', 'green40', 'green60'],
  informative: ['blue50', 'blue40', 'blue60'],
  negative: ['red50', 'red40', 'red60'],
  notice: ['yellow50', 'yellow40', 'yellow60'],
};

type IndexMap = {
  [key: number]: 'a' | 'b' | 'c';
};
export const indexMap: IndexMap = {
  0: 'a',
  1: 'b',
  2: 'c',
};
