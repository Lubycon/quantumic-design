import React, { PropsWithChildren } from 'react';
import { LubyconUIKitProvider } from '@lubycon/ui-kit';
import SEO from 'components/SEO';
import { Text } from '@lubycon/ui-kit';
import { MDXProvider } from '@mdx-js/react';

const H1 = ({ ...props }) => <Text typography="h1" css={{ display: 'block' }} {...props} />;
const H2 = ({ ...props }) => (
  <Text as="h2" typography="h5" fontWeight="bold" css={{ display: 'block' }} {...props} />
);
const H3 = ({ ...props }) => <Text as="h3" typography="h6" css={{ display: 'block' }} {...props} />;
const P = ({ ...props }) => <Text typography="p1" css={{ display: 'block' }} {...props} />;

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
};

const App = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div>
      <SEO />
      <LubyconUIKitProvider>
        <MDXProvider components={components}>
          <main>{children}</main>
        </MDXProvider>
      </LubyconUIKitProvider>
    </div>
  );
};

export default App;
