import React from 'react';
import ReactDOM from 'react-dom';
import { BottomSheetContext, useBottomSheetContext } from './context';
import { ReactButtomSheetProps } from './types';
import styles from './styles';

function ReactButtomSheet({
  isOpen,
  onClose,
  children,
  container,
}: ReactButtomSheetProps) {
  if (!container) {
    throw new Error('container element not found');
  }

  return ReactDOM.createPortal(
    <BottomSheetContext.Provider value={{ isOpen, onClose }}>
      {isOpen && (
        <section
          style={{ ...styles.wrapper }}
          onClick={event => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <div style={{ ...styles.modal }}>{children}</div>
        </section>
      )}
    </BottomSheetContext.Provider>,
    container
  );
}

function Header() {
  return (
    <div
      style={{
        ...styles.header,
      }}
    />
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
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="1.2em"
        width="1.2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
      </svg>
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

ReactButtomSheet.Header = Header;
ReactButtomSheet.CloseButton = CloseButton;

export default ReactButtomSheet;
