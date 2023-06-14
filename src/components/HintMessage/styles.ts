import { createStyles, toRem } from '../Theme';

export default createStyles(
  (theme) => ({
    hintMessage: {
      color: theme.colors.text.secondary,
      lineHeight: toRem(17),
      fontSize: toRem(14),
      fontFamily: theme.font,
      boxSizing: 'border-box',
      '& *': {
        boxSizing: 'inherit',
      },
    },
    disabled: {
      color: theme.colors.text.disabled,
    },
  }),
  { internalUsage: true }
);
