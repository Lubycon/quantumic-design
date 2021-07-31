import React, { ReactNode } from 'react';
import { PortalProvider } from 'contexts/Portal';
import { OverlayProvider } from 'contexts/Overlay';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return (
    <PortalProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </PortalProvider>
  );
}

export default LubyconUIKitProvider;
