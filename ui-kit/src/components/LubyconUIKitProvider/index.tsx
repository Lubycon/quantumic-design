import React, { ReactNode } from 'react';
import { ToastProvider } from 'contexts/Toast';
import { PortalProvider } from 'contexts/Portal';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return (
    <PortalProvider>
      <ToastProvider>{children}</ToastProvider>
    </PortalProvider>
  );
}

export default LubyconUIKitProvider;
