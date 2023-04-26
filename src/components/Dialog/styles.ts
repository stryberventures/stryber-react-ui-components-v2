import { createStyles, toRem } from '../Theme';
import { IDialog } from './index';


export default createStyles((theme) => ({
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  dialog: (props: IDialog) => ({
    direction: props.dir || 'inherit',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: toRem(500),
    padding: toRem(24),
    backgroundColor: theme.colors.background.white,
    borderRadius: toRem(4),
    boxShadow: `0px ${toRem(2)} ${toRem(11)} rgba(0, 0, 0, .37)`,
    fontFamily: theme.font,
  }),
}), { internalUsage: true });
