import { createUseStyles } from 'react-jss';
import toRem from '../../utils/toRem'


export default createUseStyles({
  content: {
    padding: [toRem(8), 0],
    maxHeight: toRem(190),
    overflow: 'auto',
  },
  checkbox: {
    '& [class*="text"]': {
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
      justifyContent: 'center',
      width: '100%',
      height: toRem(33),
    }
  },
});
