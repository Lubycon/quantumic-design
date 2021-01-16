import React, { ReactNode } from 'react';
import { ToastProvider } from 'contexts/Toast';
import { PortalProvider } from 'contexts/Portal';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return (
    <ToastProvider>
      <PortalProvider>{children}</PortalProvider>
    </ToastProvider>
  );
}

export default LubyconUIKitProvider;
