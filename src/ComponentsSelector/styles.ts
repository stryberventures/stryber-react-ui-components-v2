import { createStyles } from '../components/Theme';

export default createStyles((theme) => ({
  selectorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1000,
  },
  itemContainer: {
    marginBottom: 3,
  },
  title: {
    marginTop: 0,
    marginBottom: 10,
    fontFamily: theme.font,
    fontWeight: 400,
    color: theme.text.secondary
  },
  codeBoxContainer: {
    width: '100%',
    maxWidth: 700,
    '& pre': {
      padding: '11px 1rem',
      lineHeight: '18px',
      fontSize: 16,
      color: theme.text.secondary
    }
  }
}))
