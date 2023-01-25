import { createStyles, toRem } from '../../components/Theme';

export default createStyles(() => ({
  elevation: {
    boxSizing: 'border-box',
    borderRadius: toRem(16),
    '& *, & *:before, & *:after': {
      boxSizing: 'inherit',
    },
  },
  extraLight: {
    boxShadow: '0px 1px 2px rgba(102, 112, 133, 0.3), 0px 1px 3px 1px rgba(102, 112, 133, 0.15)',
  },
  light: {
    boxShadow: '0px 1px 2px rgba(102, 112, 133, 0.3), 0px 2px 6px 2px rgba(102, 112, 133, 0.15)',
  },
  medium: {
    boxShadow: '0px 4px 8px 3px rgba(102, 112, 133, 0.15), 0px 1px 3px rgba(102, 112, 133, 0.3)',
  },
  heavy: {
    boxShadow: '0px 6px 10px 4px rgba(102, 112, 133, 0.15), 0px 2px 3px rgba(102, 112, 133, 0.3)',
  },
  extraHeavy: {
    boxShadow: '0px 8px 12px 6px rgba(102, 112, 133, 0.15), 0px 4px 4px rgba(102, 112, 133, 0.3)',
  },
}), { internalUsage: true });
