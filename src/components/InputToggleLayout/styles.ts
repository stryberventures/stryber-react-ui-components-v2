import { createStyles } from '../Theme';

export default createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  disabled: {
    pointerEvents: 'none',
  },
  input: () => ( {
    display: 'none',
  }),
  container: {
    userSelect: 'none',
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    '-webkit-tap-highlight-color': 'transparent',
  },
  text: {
    marginLeft: 8,
    fontFamily: theme.font,
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    position: 'relative',
  },
  reverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    '& $text': {
      marginRight: 8,
      marginLeft: 0,
    }
  },
  fullWidth: {
    justifyContent: 'space-between',
  },
  medium: {
    lineHeight: '20px',
  },
  small: {
    lineHeight: '16px',
  },
  title: {
    fontWeight: 500,
    color: theme.text.secondary,
  },
  label: {
    color: theme.text.hint,
  },
  textDisabled: {
    color: theme.text.disabled,
  },
  error: {
    marginTop: 8,
  },
}));
