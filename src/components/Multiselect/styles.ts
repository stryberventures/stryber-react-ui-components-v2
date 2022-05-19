import { createUseStyles } from 'react-jss';

export default createUseStyles({
  content: {
    padding: [8, 0],
    maxHeight: 190,
    overflow: 'auto',
  },
  checkbox: {
    '& label': {
      height: 40,
    }
  }
});
