import { createStyles, toRem } from '../Theme';

export default createStyles((theme) => ({
  errorMessage: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing['8'],
    marginTop: theme.spacing['8'],
    marginBottom: theme.spacing['8'],
    color: theme.colors.error.dark600,
    lineHeight: toRem(16),
  },
  icon: {
    minWidth: toRem(16),
    width: toRem(16),
    minHeight: toRem(16),
    height: toRem(16),
  },
}), { internalUsage: true });
