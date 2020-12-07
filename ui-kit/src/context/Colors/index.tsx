import React from 'react';
import { ColorContextType } from './types';

const color = {
  green50: 'var(--lubycon-green50)',
  green40: 'var(--lubycon-green40)',
  green60: 'var(--lubycon-green60)',
  blue50: 'var(--lubycon-blue50)',
  blue40: 'var(--lubycon-blue40)',
  blue60: 'var(--lubycon-blue60)',
  red50: 'var(--lubycon-red50)',
  red40: 'var(--lubycon-red40)',
  red60: 'var(--lubycon-red60)',
  yellow50: 'var(--lubycon-yellow50)',
  yellow40: 'var(--lubycon-yellow40)',
  yellow60: 'var(--lubycon-yellow60)',
  gray100: 'var(--lubycon-gray100)',
  gray90: 'var(--lubycon-gray90)',
  gray80: 'var(--lubycon-gray80)',
  gray70: 'var(--lubycon-gray70)',
  gray60: 'var(--lubycon-gray60)',
  gray50: 'var(--lubycon-gray50)',
  gray40: 'var(--lubycon-gray40)',
  gray30: 'var(--lubycon-gray30)',
  gray20: 'var(--lubycon-gray20)',
  gray10: 'var(--lubycon-gray10)',
};

const ColorContext = React.createContext<ColorContextType>(color);

export default ColorContext;
