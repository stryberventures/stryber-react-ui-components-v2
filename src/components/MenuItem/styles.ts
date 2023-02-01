import { createStyles, toRem } from '../Theme'


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
      backgroundColor: theme.colors.neutralGray.light100,
    },
  },
  menuItemText: {
    lineHeight: toRem(33),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: theme.colors.text.headline,
  },
  selected: {
    backgroundColor: theme.colors.neutralGray.light100,
  },
  readOnly: {},
}), { internalUsage: true });
