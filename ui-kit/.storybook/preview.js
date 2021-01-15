import '../src/sass/index.scss';
import React from 'react';
import { LubyconUIKitProvider } from '../src/components';

export const decorators = [(Story => (
  <LubyconUIKitProvider>
    <Story />
  </LubyconUIKitProvider>
))];
