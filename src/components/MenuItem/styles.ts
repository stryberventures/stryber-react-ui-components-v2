import { createStyles } from '../Theme';

export default createStyles((theme) => ({
  menuItem: {
    padding: [0, 8],
    lineHeight: '33px',
    fontFamily: theme.font,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: theme.text.primary,
    fontSize: 14,
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
