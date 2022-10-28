import { createStyles } from '../Theme';
import toRem from '../../utils/toRem'


export default createStyles((theme) => ({
  menuItemWrapper: {
    display: 'flex',
  },
  menuItem: {
    boxSizing: 'border-box',
    width: '100%',
    padding: [0, toRem(8)],
    overflow: 'hidden',
    '&:not($readOnly):hover': {
      cursor: 'pointer',
      backgroundColor: theme.default.extraLight,
    },
  },
  menuItemText: {
    lineHeight: toRem(33),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: theme.text.primary,
  },
  selected: {
    backgroundColor: theme.default.light,
  },
  readOnly: {},
}));
