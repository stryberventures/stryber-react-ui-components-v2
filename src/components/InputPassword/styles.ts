import { createUseStyles } from 'react-jss';

export default createUseStyles({
  container: {
    width: 320,
  },
  inputLayout: {
    width: '100%',
  },
  chips: {
    marginTop: 16,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  chipMatched: {
    width: 18,
  },
  fullWidth: {
    width: '100%',
  }
});
