export interface ReactButtomSheetProps {
  /**
   * Whether the bottom sheet is open or not
   */
  isOpen: boolean;
  /**
   * The function to call when the bottom sheet is closed
   */
  onClose: () => void;
  /**
   * The text to display
   */
  children: React.ReactNode;
}
