import { createStyles } from '../Theme';


export default createStyles((theme) => ({
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    zIndex: 100,
  },
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    padding: [20, 50, 28, 24],
    backgroundColor: theme.background.default,
    borderRadius: 4,
    boxShadow: '0px 2px 11px rgba(0, 0, 0, .37)',
    fontFamily: theme.font,
  },
}));