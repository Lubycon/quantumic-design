import { css } from '@emotion/react';
import { HTMLAttributes } from 'react';
import { isMatchedSM } from '../../utils/mediaQuery';
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export function Container({ children, fluid = false, ...props }: ContainerProps): JSX.Element {
  const maxWidth = isMatchedSM() ? '1200px' : fluid ? 'auto' : 'none';

  return (
    <div
      css={css`
        width: 100%;
        max-width: ${maxWidth};
        margin: 0 auto;
      `}
      {...props}
    >
      {children}
    </div>
  );
}
