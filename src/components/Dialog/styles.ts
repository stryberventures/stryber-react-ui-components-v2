import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';


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
    zIndex: 100,
  },
  dialog: {
    display: 'flex',
    flexDirection: 'column',
    width: toRem(500),
    padding: [toRem(24), toRem(48), toRem(24), toRem(24)],
    backgroundColor: theme.background.default,
    borderRadius: toRem(4),
    boxShadow: `0px ${toRem(2)} ${toRem(11)} rgba(0, 0, 0, .37)`,
    fontFamily: theme.font,
  },
}));
