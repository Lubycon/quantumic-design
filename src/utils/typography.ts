export type Typographys =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'p1'
  | 'p2'
  | 'caption';
export const typographys: Record<Typographys, { fontSize: string; lineHeight: number }> = {
  h1: {
    fontSize: '2.625rem',
    lineHeight: 1.5,
  },
  h2: {
    fontSize: '2rem',
    lineHeight: 1.5,
  },
  h3: {
    fontSize: '1.75rem',
    lineHeight: 1.5,
  },
  h4: {
    fontSize: '1.625rem',
    lineHeight: 1.5,
  },
  h5: {
    fontSize: '1.5rem',
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1.25rem',
    lineHeight: 1.5,
  },
  subtitle: {
    fontSize: '1.125rem',
    lineHeight: 1.7,
  },
  p1: {
    fontSize: '1rem',
    lineHeight: 2,
  },
  p2: {
    fontSize: '0.9375rem',
    lineHeight: 1.7,
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.6,
  },
};

export type FontWeights = 'light' | 'regular' | 'bold' | 'black';
export const fontWeights: Record<FontWeights, number> = {
  light: 300,
  regular: 400,
  bold: 700,
  black: 900,
};

export function getFontWeightCss(weight: FontWeights) {
  return {
    fontWeight: fontWeights[weight],
  };
}

export function getTypographyCss(typo: Typographys) {
  return typographys[typo];
}
