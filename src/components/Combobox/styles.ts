import { createStyles, toRem } from '../Theme';

export default createStyles(() => ({
  content: {
    padding: [toRem(8), 0],
    maxHeight: toRem(190),
    overflow: 'auto',
  },
  clearIcon: {
    zIndex: 99,
  }
}), { internalUsage: true });
