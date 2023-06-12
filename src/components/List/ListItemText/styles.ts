import { createStyles } from '../../Theme';

export default () =>
  createStyles(
    (theme) => ({
      label: {
        color: theme.colors.text.secondary,
        fontSize: 12,
        height: 14,
      },
      primary: {
        color: theme.colors.text.headline,
        height: 24,
        fontWeight: 400,
      },
      secondary: {
        color: theme.colors.text.secondary,
        height: 20,
      },
      listItemText: {
        display: 'flex',
        alignItems: 'center',
      },
    }),
    { internalUsage: true }
  );
