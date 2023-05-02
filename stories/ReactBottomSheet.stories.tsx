import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ReactButtomSheet from '../src';
import { ReactButtomSheetProps } from '../src/types';

const meta: Meta = {
  title: 'ReactBottomSheet',
  component: ReactButtomSheet,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

// <div className="bg-slate-200 w-[400px] h-[844px] mx-auto">

const Template: StoryFn<ReactButtomSheetProps> = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <main className="w-screen h-screen p-0">
      <div className="flex justify-center items-center">
        <button onClick={() => setIsOpen(true)}>Open React Buttom Sheet</button>
      </div>

      <ReactButtomSheet isOpen={isOpen} onClose={onClose}>
        <ReactButtomSheet.CloseButton />
        <p>React Buttom Sheet Content</p>
      </ReactButtomSheet>
    </main>
  );
};

export const Default = Template.bind({});
Default.args = {};
// Default.args = {
//   children: 'Hello World',
// };
