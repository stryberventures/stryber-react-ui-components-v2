import { createStyles } from '../../Theme';
import toRem from '../../Theme/toRem'


export default createStyles((theme) => ({
  listItem: {
    fontFamily: theme.font,
    fontSize: toRem(14),
    fontWeight: 500,
    padding: [toRem(20), toRem(8)],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: theme.text.secondary,
    fontWeight: '500',
  },
  subtitle: {
    color: theme.text.hint,
    fontWeight: '400',
  },
  leftContent: {
    marginRight: toRem(16),
  },
  rightContent: {
    marginLeft: toRem(16),
  },
}));
