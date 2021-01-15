import React, { ReactNode } from 'react';
import { PortalProvider } from '../../providers/PortalContext';

interface Props {
  children: ReactNode;
}

function LubyconUIKitProvider({ children }: Props) {
  return <PortalProvider>{children}</PortalProvider>;
}

export default LubyconUIKitProvider;
