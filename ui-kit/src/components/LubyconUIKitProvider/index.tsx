import React, { ReactNode } from 'react';
import { ToastProvider } from 'contexts/Toast';
import { PortalProvider } from 'contexts/Portal';
import { SnackbarProvider } from 'src/contexts/Snackbar';
import { ModalProvider } from 'src/contexts/Modal';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return (
    <PortalProvider>
      <ModalProvider>
        <SnackbarProvider>
          <ToastProvider>{children}</ToastProvider>
        </SnackbarProvider>
      </ModalProvider>
    </PortalProvider>
  );
}

export default LubyconUIKitProvider;
