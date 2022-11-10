import React from 'react';
import { QDProvider, Container } from 'src';

export const decorators = [
  (Story) => (
    <QDProvider>
      <Container>
        <Story />
      </Container>
    </QDProvider>
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
