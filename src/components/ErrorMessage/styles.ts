import { createStyles, toRem } from '../../components/Theme';

export default createStyles((theme) => ({
  errorMessage: {
    color: theme.colors.error.dark600,
    lineHeight: toRem(17),
  },
}), { internalUsage: true });
