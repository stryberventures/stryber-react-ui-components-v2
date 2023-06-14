import { createStyles, toRem } from '../../Theme';

export default () =>
  createStyles(
    (theme) => ({
      tableCell: {
        fontFamily: theme.font,
      },
      tableHeadCell: {
        padding: [theme.spacing[12], theme.spacing[24]],
        color: theme.colors.text.secondary,
        fontWeight: 'normal',
        textAlign: 'left',
        fontSize: toRem(12),
        lineHeight: toRem(14),
      },
      tableBodyCell: {
        padding: [theme.spacing[16], theme.spacing[24]],
        fontSize: toRem(14),
      },
      headContentWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing[4],
      },
    }),
    { internalUsage: true }
  );
