import { createStyles, toRem } from '../Theme';

export default () =>
  createStyles(
    () => ({
      animatedEnter: {
        opacity: 0,
      },
      animatedEnterActive: {
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'opacity 300ms, transform 300ms',
      },
      animatedExit: {
        opacity: 1,
      },
      animatedExitActive: {
        opacity: 0,
        transition: 'opacity 300ms, transform 300ms',
      },
      snackbar: {
        position: 'fixed',
        width: '90vw',
        maxWidth: 400,
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
    }),
    { internalUsage: true }
  );
