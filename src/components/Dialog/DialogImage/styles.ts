import { createStyles, toRem } from '../../Theme';

export default createStyles(
  () => ({
    dialogImage: {
      display: 'block',
      width: '100%',
      marginBottom: toRem(24),
      borderRadius: toRem(8),
    },
  }),
  { internalUsage: true }
);
