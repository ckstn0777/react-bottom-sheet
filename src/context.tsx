import { createContext, useContext } from 'react';

type BottomSheetContextType = {
  isOpen: boolean;
  onClose: () => void;
};

export const BottomSheetContext = createContext<BottomSheetContextType | null>(
  null
);

export const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error(
      'useBottomSheetContext must be used within a BottomSheetContextProvider'
    );
  }
  return context;
};
