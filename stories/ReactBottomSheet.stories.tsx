import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ReactButtomSheet, ReactButtomSheetProps } from '../src';

const meta: Meta = {
  title: 'ReactBottomSheet',
  component: ReactButtomSheet,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: StoryFn<ReactButtomSheetProps> = args => (
  <ReactButtomSheet {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World',
};
