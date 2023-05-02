import React from 'react';
import ReactDOM from 'react-dom';
import { BottomSheetContext, useBottomSheetContext } from './context';
import { ReactButtomSheetProps } from './types';
import styles from './styles';

function ReactButtomSheet({
  isOpen,
  onClose,
  children,
}: ReactButtomSheetProps) {
  const portalElement = document.getElementById('portal');

  if (!portalElement) {
    throw new Error('Portal element not found');
  }

  return ReactDOM.createPortal(
    <BottomSheetContext.Provider value={{ isOpen, onClose }}>
      {isOpen && (
        <div style={{ ...styles.wrapper }}>
          <div style={{ ...styles.modal }}>{children}</div>
        </div>
      )}
    </BottomSheetContext.Provider>,
    portalElement
  );
}

function CloseButton() {
  const { onClose } = useBottomSheetContext();

  return (
    <button
      onClick={() => onClose()}
      style={{
        ...styles.closeBtn,
      }}
    >
      X
    </button>
  );
}

// function Wrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       style={{
//         position: 'fixed',
//         inset: '0',
//         backgroundColor: 'rgb(0 0 0 / 0.5)',
//       }}
//     >
//       <div className="absolute left-0 bottom-0 bg-white w-full">{children}</div>
//     </div>
//   );
// }

// ReactButtomSheet.Wrapper = Wrapper;
ReactButtomSheet.CloseButton = CloseButton;

export default ReactButtomSheet;
