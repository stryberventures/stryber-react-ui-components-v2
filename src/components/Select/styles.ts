import { createStyles } from '../../styles';

export default createStyles((theme) => ({
  content: {
    padding: [8, 0],
    maxHeight: 190,
    overflow: 'auto',
  },
  item: {
    fontFamily: theme.font,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    height: 40,
    lineHeight: '40px',
    color: theme.default.dark,
    fontSize: 14,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  selected: {
    backgroundColor: theme.default.light,
  }
}));
