import React, { ReactNode } from 'react';
import { ToastProvider } from 'contexts/Toast';
import { PortalProvider } from 'contexts/Portal';
import { SnackbarProvider } from 'src/contexts/Snackbar';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return (
    <PortalProvider>
      <SnackbarProvider>
        <ToastProvider>{children}</ToastProvider>
      </SnackbarProvider>
    </PortalProvider>
  );
}

export default LubyconUIKitProvider;
