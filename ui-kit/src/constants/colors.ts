export const colors = {
  green40: '#dff6e7',
  green50: '#13bc4c',
  green60: '#00a438',
  blue40: '#e6effe',
  blue50: '#135ce9',
  blue60: '#013cad',
  red40: '#fae7e8',
  red50: '#cb121c',
  red60: '#9b0b13',
  yellow40: '#fdf5ce',
  yellow50: '#f0ca08',
  yellow60: '#aa8f00',
  gray100: '#1b1b1c',
  gray90: '#2a2a2c',
  gray80: '#4c4d53',
  gray70: '#76777d',
  gray60: '#8e9095',
  gray50: '#b5b6b9',
  gray40: '#d0d1d3',
  gray30: '#e3e4e5',
  gray20: '#f3f4f5',
  gray10: '#fcfcfd',
} as const;

export type SemanticColor = 'positive' | 'informative' | 'negative' | 'notice';

export type ColorProperty = keyof typeof colors;

export type Colors = typeof colors[keyof typeof colors];
