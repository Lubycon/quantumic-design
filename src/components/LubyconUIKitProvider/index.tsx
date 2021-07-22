import React, { ReactNode } from 'react';
import { PortalProvider } from 'contexts/Portal';
import { SnackbarProvider } from 'src/contexts/Snackbar';
import { ModalProvider } from 'src/contexts/Modal';
import { OverlayProvider } from 'src/contexts/Overlay';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return (
    <PortalProvider>
      <OverlayProvider>
        <ModalProvider>
          <SnackbarProvider>{children}</SnackbarProvider>
        </ModalProvider>
      </OverlayProvider>
    </PortalProvider>
  );
}

export default LubyconUIKitProvider;
