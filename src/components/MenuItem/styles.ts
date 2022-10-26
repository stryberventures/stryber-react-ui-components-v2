import { createStyles } from '../Theme';
import toRem from '../../utils/toRem'


export default createStyles((theme) => ({
  menuItem: {
    padding: [0, toRem(8)],
    lineHeight: toRem(33),
    fontFamily: theme.font,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: theme.text.primary,
    fontSize: toRem(14),
    '&:not($readOnly):hover': {
      cursor: 'pointer',
      backgroundColor: theme.default.extraLight,
    },
  },
  selected: {
    backgroundColor: theme.default.light,
  },
  readOnly: {},
}));
