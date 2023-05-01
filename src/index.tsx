import React from 'react';
// import './tailwind.css';

export interface ReactButtomSheetProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The text to display
   */
  children: React.ReactNode;
}

export const ReactButtomSheet = ({
  children,
  ...rest
}: ReactButtomSheetProps) => {
  return (
    <button
      className="border-none bg-[#ffa000] m-0 px-5 py-2.5 text-white rounded-full cursor-pointer font-bold hover:bg-[#ff9900]"
      {...rest}
    >
      {children}
    </button>
  );
};
