import { createStyles, toRem } from '../Theme';

export default createStyles((theme) => ({
  errorMessage: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing['8'],
    marginTop: theme.spacing['8'],
    marginBottom: theme.spacing['8'],
    color: theme.colors.error.main500,
    lineHeight: toRem(16),
    boxSizing: 'border-box',
    '& *': {
      boxSizing: 'inherit',
    },
  },
  icon: {
    minWidth: toRem(16),
    width: toRem(16),
    minHeight: toRem(16),
    height: toRem(16),
  },
}), { internalUsage: true });
