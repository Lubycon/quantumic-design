import '../src/sass/index.scss';
import React from 'react';
import { LubyconUIKitProvider, Container } from 'src';

export const decorators = [(Story => (
  <LubyconUIKitProvider>
    <Container>
      <Story />
    </Container>
  </LubyconUIKitProvider>
))];

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: ['Lubycon UI Kit',['Welcome', 'Getting Started'], 'Styles', 'Components'], 
      locales: '', 
    },
  },
};