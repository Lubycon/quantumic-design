import React, { ReactNode } from 'react';
import { PortalProvider } from '../../contexts/Portal';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return <PortalProvider>{children}</PortalProvider>;
}

export default LubyconUIKitProvider;
