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
      width: `calc(100% - ${toRem(28)})`,
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
      height: toRem(33),
    }
  },
});
