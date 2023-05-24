import { createStyles, toRem } from '../Theme';

export default () => createStyles(() => ({
  snackbar: {
    position: 'fixed',
    width: '90vw',
    maxWidth: 400,
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s linear 300ms, opacity 300ms',
  },
  visible: {
    visibility: 'visible',
    opacity: 1,
    transition: 'visibility 0s linear 0s, opacity 300ms'
  },
  top: {
    top: toRem(40),
  },
  bottom: {
    bottom: toRem(40),
  },
  left: {
    left: toRem(40),
  },
  right: {
    right: toRem(40),
  },
  center: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
}), { internalUsage: true });
