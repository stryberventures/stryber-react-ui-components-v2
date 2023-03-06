import { createStyles, toRem } from '../Theme';

export default createStyles((theme) => ({
  errorMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing['8'],
    marginTop: theme.spacing['8'],
    marginBottom: theme.spacing['8'],
    color: theme.colors.error.main500,
    lineHeight: toRem(17),
  },
}), { internalUsage: true });
