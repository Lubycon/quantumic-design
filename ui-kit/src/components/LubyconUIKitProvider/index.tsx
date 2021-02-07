import React, { ReactNode } from 'react';
import { ToastProvider } from 'contexts/Toast';
import { PortalProvider } from 'contexts/Portal';
// import { ModalProvider } from 'contexts/Modal';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return (
    <PortalProvider>
      <ToastProvider>{children}</ToastProvider>
      {/* <ModalProvider>{children}</ModalProvider> */}
    </PortalProvider>
  );
}

export default LubyconUIKitProvider;
