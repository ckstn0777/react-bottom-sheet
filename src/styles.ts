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
    minHeight: '300px',
    zIndex: 100,
    //border: '1px solid #334155cc',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    overflow: 'hidden',
  },
  closebtn: {
    position: 'absolute',
    right: '0',
    top: '0',
    backgroundColor: 'slategray',
    width: '2rem',
    height: '2rem',
  },
  header: {
    width: '40px',
    height: '4px',
    backgroundColor: '#aaaaaa',
    borderRadius: '4px',
    margin: '8px auto 16px',
  },
};

export default styles;
