import { css } from '@emotion/react';

function horizontalGutter(space: number, selector: string) {
  return css`
    & > ${selector} ~ ${selector} {
      margin-left: ${space}px;
    }
  `;
}

function verticalGutter(space: number, selector: string) {
  return css`
    & > ${selector} ~ ${selector} {
      margin-top: ${space}px;
    }
  `;
}

export type FlexDirection = 'horizontal' | 'vertical';
export interface GutterOptions {
  direction: FlexDirection;
  space?: number;
  selector?: string;
}

export function gutter(options: GutterOptions) {
  const { direction, space = 24, selector = '*:not(style)' } = options;

  if (direction === 'vertical') {
    return verticalGutter(space, selector);
  } else {
    return horizontalGutter(space, selector);
  }
}
