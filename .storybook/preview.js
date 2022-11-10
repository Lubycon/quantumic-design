import React from 'react';
import { OverlayProvider } from '@lubycon/react';
import { QDProvider, Container } from 'src';

export const decorators = [
  (Story) => (
    <OverlayProvider>
      <QDProvider>
        <Container>
          <Story />
        </Container>
      </QDProvider>
    </OverlayProvider>
  ),
];

export const parameters = {
  options: {
    storySort: {
      method: '',
      order: ['Quantumic Design', ['Welcome', 'Getting Started', 'Usage'], 'Styles', 'Components'],
      locales: '',
    },
  },
};
