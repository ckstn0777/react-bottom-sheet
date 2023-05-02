import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ReactButtomSheet from '../src';
import { ReactButtomSheetProps } from '../src/types';
import YoutubeMusicContent from './YoutubeMusicContent';
import YoutubeMusicBottom from './YoutubeMusicBottom';

const meta: Meta = {
  title: 'ReactBottomSheet',
  component: ReactButtomSheet,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story: StoryFn) => (
      <div>
        <Story />
        <div id="portal"></div>
      </div>
    ),
  ],
};

export default meta;

// <div className="bg-slate-200 w-[400px] h-[844px] mx-auto">

const Template: StoryFn<ReactButtomSheetProps> = args => {
  let portalElement = document.getElementById('portal');

  if (!portalElement) {
    portalElement = document.createElement('div');
    portalElement.id = 'portal';
    document.getElementById('storybook-root')?.appendChild(portalElement);
  }

  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <main className="w-screen h-screen p-0">
      <YoutubeMusicContent setIsOpen={setIsOpen} />

      <ReactButtomSheet
        isOpen={isOpen}
        onClose={onClose}
        container={portalElement}
      >
        {/* <ReactButtomSheet.Header /> */}
        <YoutubeMusicBottom />
      </ReactButtomSheet>
    </main>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  // children:
};
// Default.args = {
//   children: 'Hello World',
// };
