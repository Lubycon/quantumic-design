import React, { PropsWithChildren } from 'react';
import { LubyconUIKitProvider } from '@lubycon/ui-kit';
import SEO from 'components/SEO';

const App = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      <SEO />
      <LubyconUIKitProvider>
        <main>{children}</main>
      </LubyconUIKitProvider>
    </div>
  );
};

export default App;
