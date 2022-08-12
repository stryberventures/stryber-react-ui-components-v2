import { createUseStyles } from 'react-jss';

export default createUseStyles({
  content: {
    padding: [8, 0],
    maxHeight: 190,
    overflow: 'auto',
  },
  checkbox: {
    '& [class*="text"]': {
      width: 'calc(100% - 28px)',
      display: 'block',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    '& [class*="label"]': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    '& label': {
      alignItems: 'center',
      height: 33,
    }
  },
});
