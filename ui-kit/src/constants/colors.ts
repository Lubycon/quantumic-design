export const colors = {
  green50: '#13BC4C',
  green40: '#78CF81',
  green60: '#0F933C',
  blue50: '#135CE9',
  blue40: '#87ADF5',
  blue60: '#013CAD',
  red50: '#CB121C',
  red40: '#F29CA1',
  red60: '#9B0B13',
  yellow50: '#F0CB08',
  yellow40: '#F9E681',
  yellow60: '#AA8F00',
  gray100: '#1B1B1C',
  gray90: '#2A2A2C',
  gray80: '#4C4D53',
  gray70: '#76777D',
  gray60: '#8E9095',
  gray50: '#B5B6B9',
  gray40: '#D0D1D3',
  gray30: '#E3E4E5',
  gray20: '#F3F4F5',
  gray10: '#FCFCFD',
} as const;

export type SemanticColorName = 'positive' | 'informative' | 'negative' | 'notice';

export type ColorProperty = keyof typeof colors;

export type Colors = typeof colors[keyof typeof colors];
