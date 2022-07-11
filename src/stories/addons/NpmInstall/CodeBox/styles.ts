import { createUseStyles } from 'react-jss';

export default createUseStyles({
  codebox: {
    border: '1px #000 solid',
    borderRadius: 4,
    backgroundColor: '#E4E7EC',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 700,
  },
  children: {
    marginTop: 0,
    marginBottom: 0,
  },
  copyContainer: {
    padding: 10,
    cursor: 'pointer',
  },
});
