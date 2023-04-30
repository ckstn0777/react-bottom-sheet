import React from 'react';

interface ReactButtonSheetProps {
  /**
   * The text to display
   */
  text: string;
}

export const ReactButtonSheet = ({ text }: ReactButtonSheetProps) => {
  return <div>{text}</div>;
};
