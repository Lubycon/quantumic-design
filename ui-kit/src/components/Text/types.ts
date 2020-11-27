export const typographys = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle',
  'button',
  'content',
  'content2',
  'caption',
] as const;
export type Typographys = typeof typographys[number];

export const fontWeights = ['light', 'regular', 'bold', 'black'] as const;
export type FontWeights = typeof fontWeights[number];

export const DEFAULT_ELEMENT = 'span' as const;
