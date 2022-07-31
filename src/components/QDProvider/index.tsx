import { Fragment, ReactNode } from 'react';
import { css, Global } from '@emotion/react';

interface Props {
  children: ReactNode;
}

export function QDProvider({ children }: Props) {
  return (
    <Fragment>
      <Global
        styles={css`
          body {
            font-size: 16px;
            font-family: 'Noto Sans KR', sans-serif;
          }
        `}
      />
      {children}
    </Fragment>
  );
}
