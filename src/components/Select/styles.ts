import { createStyles, toRem } from '../Theme';

export default createStyles(
  () => ({
    content: {
      padding: [toRem(8), 0],
      maxHeight: toRem(336),
      overflow: 'auto',
    },
  }),
  { internalUsage: true }
);
