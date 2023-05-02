import React from 'react';
import anysort from 'anysort';
import { initializeRTL } from 'storybook-addon-rtl';
import { ThemeProvider } from '../src/components/Theme';

initializeRTL();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    showRoots: true,
    storySort: (previous, next) => {
      const [_, previousMeta] = previous
      const [__, nextMeta] = next

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Overview/Intro',
        'Overview/**',
        'Components/**',
        'Core/**/README',
        'Core/Components Selector',
        'Modules/**',
      ])
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{}}>
      <Story />
    </ThemeProvider>
  ),
];
