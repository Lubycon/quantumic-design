import { ReactNode } from 'react';
import { PortalProvider } from '../../contexts/Portal';
import { OverlayProvider } from '../../contexts/Overlay';
import { css, Global } from '@emotion/react';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return (
    <>
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
    </>
  );
}

export default LubyconUIKitProvider;
