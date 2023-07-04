import { createStyles, toRem } from '../Theme';
import { IDialog } from './index';

export default () =>
  createStyles(
    (theme) => ({
      overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        padding: toRem(16),
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: 'rgba(102, 112, 133, 0.8)',
      },
      dialog: (props: IDialog) => ({
        direction: props.dir || 'inherit',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: toRem(350),
        boxSizing: 'border-box',
        padding: `${toRem(20)} ${toRem(16)}`,
        borderRadius: toRem(12),
        boxShadow: `0px ${toRem(8)} ${toRem(8)} ${toRem(
          -4
        )} rgba(16, 24, 40, 0.04), 0px ${toRem(20)} ${toRem(24)} ${toRem(
          -4
        )} rgba(16, 24, 40, 0.10)`,
        backgroundColor: theme.colors.background.white,
      }),
    }),
    { internalUsage: true }
  );
