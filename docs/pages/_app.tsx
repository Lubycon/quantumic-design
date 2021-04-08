import React from 'react';
import { AppProps } from 'next/app';
import { LubyconUIKitProvider } from '@lubycon/ui-kit';

import 'normalize.css';
import '@lubycon/ui-kit/css/lubycon-ui-kit.min.css';
import 'highlight.js/styles/stackoverflow-light.css';
import Head from 'next/head';

export default function LubyconUIKitDocsApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lubycon UI Kit</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LubyconUIKitProvider>
        <Component {...pageProps} />
      </LubyconUIKitProvider>
    </>
  );
}
