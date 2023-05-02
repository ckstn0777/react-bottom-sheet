const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    position: 'fixed',
    inset: '0',
    backgroundColor: 'rgb(0 0 0 / 0.5)',
  },
  modal: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    backgroundColor: 'white',
    width: '100%',
    height: '360px',
  },
  closebtn: {
    position: 'absolute',
    right: '0',
    top: '0',
    backgroundColor: 'slategray',
    width: '2rem',
    height: '2rem',
  },
};

export default styles;
