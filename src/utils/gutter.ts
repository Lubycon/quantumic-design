import { css } from '@emotion/react';
import { CSSProperties } from 'react';

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

export type GutterDirection = 'horizontal' | 'vertical';

export interface GutterOptions {
  direction: GutterDirection;
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

export function convertFlexDirectionToGutterDirection(
  flexDirection: CSSProperties['flexDirection']
): GutterDirection {
  const rowDirections: CSSProperties['flexDirection'][] = ['row', 'row-reverse'];
  const columnDirections: CSSProperties['flexDirection'][] = ['column', 'column-reverse'];

  if (rowDirections.includes(flexDirection)) {
    return 'horizontal';
  } else if (columnDirections.includes(flexDirection)) {
    return 'vertical';
  }

  return 'horizontal';
}
