import { createStyles, toRem } from '../Theme';

export default () => createStyles((theme) => ({
  table: {
    width: 'fit-content',
    boxSizing: 'border-box',
    border: [1, 'solid', theme.colors.neutralGray.light200],
    borderRadius: toRem(6),
    '& *, &:after, &:before': {
      boxSizing: 'inherit',
    }
  },
  selectedItems: {
    color: theme.colors.text.secondary,
  },
  evenRow: {
    backgroundColor: theme.colors.neutralGray.extraLight50,
    '&:hover': {
      backgroundColor: [theme.colors.neutralGray.light100, '!important'],
    }
  },
}), { internalUsage: true });
