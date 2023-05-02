import '../tailwind.css';
import React from 'react'
import type { Preview } from '@storybook/react';
import { StoryFn } from "@storybook/react";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone12",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },

};


export const decorators = [
  (Story: StoryFn) => (
    <>
      <Story />
      <div id="portal"></div>
    </>
  )
];


export default preview;
