import { createStyles, toRem } from '../../Theme';

export default createStyles(
  (theme) => ({
    dialogTitleText: {
      marginBottom: 8,
      color: theme.colors.text.headline,
    },
    dialogTitleBlock: {
      marginBottom: 8,
      fontSize: toRem(18),
      lineHeight: toRem(28),
      color: theme.colors.text.headline,
    },
  }),
  { internalUsage: true }
);
