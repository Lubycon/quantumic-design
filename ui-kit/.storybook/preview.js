import '../src/sass/index.scss';
import React from 'react';
import { LubyconUIKitProvider, Container } from '../src/components';

export const decorators = [(Story => (
  <LubyconUIKitProvider>
    <Container>
      <Story />
    </Container>
  </LubyconUIKitProvider>
))];
