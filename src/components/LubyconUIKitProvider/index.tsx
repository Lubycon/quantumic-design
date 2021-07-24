import React, { ReactNode } from 'react';
import { PortalProvider } from 'contexts/Portal';
import { SnackbarProvider } from 'contexts/Snackbar';
import { OverlayProvider } from 'contexts/Overlay';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return (
    <PortalProvider>
      <OverlayProvider>
        <SnackbarProvider>{children}</SnackbarProvider>
      </OverlayProvider>
    </PortalProvider>
  );
}

export default LubyconUIKitProvider;
