import { createStyles, toRem } from '../../Theme';

export default createStyles(
  () => ({
    dialogActions: {
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: toRem(12),
      marginTop: toRem(24),
    },
    layoutRow: {
      flexDirection: 'row',
      alignItems: 'center',
      '& > button': {
        flex: 1,
      }
    },
    layoutShrunk: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    }
  }),
  { internalUsage: true }
);
