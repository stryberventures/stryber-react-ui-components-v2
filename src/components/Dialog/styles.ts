import { createStyles, toRem } from '../../components/Theme';


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
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    width: toRem(500),
    padding: [toRem(24), toRem(48), toRem(24), toRem(24)],
    backgroundColor: theme.colors.background.white,
    borderRadius: toRem(4),
    boxShadow: `0px ${toRem(2)} ${toRem(11)} rgba(0, 0, 0, .37)`,
    fontFamily: theme.font,
  },
}), { internalUsage: true });
