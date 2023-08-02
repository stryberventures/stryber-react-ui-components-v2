import { createStyles, toRem } from '../../Theme';

export default createStyles(
  (theme) => ({
    clearIcon: {
      backgroundColor: theme.colors.neutralGray.medium300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: toRem(4),
      width: toRem(20),
      height: toRem(20),
      minWidth: toRem(20),
    },
  }),
  { internalUsage: true }
);
