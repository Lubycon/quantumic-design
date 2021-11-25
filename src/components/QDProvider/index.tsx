import { Fragment, ReactNode } from 'react';
import { PortalProvider } from '../../contexts/Portal';
import { OverlayProvider } from '../../contexts/Overlay';
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
      <PortalProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </PortalProvider>
    </Fragment>
  );
}
