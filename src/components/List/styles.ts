import { createStyles } from '../Theme';

export default createStyles((theme) => ({
  listItem: {
    fontFamily: theme.font,
    fontSize: '14px',
    fontWeight: 500,
    padding: '20px 8px',
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
    marginRight: 16,
  },
  rightContent: {
    marginLeft: 16,
  },
}));
