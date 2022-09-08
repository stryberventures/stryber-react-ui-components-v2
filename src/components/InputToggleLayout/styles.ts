import { createStyles } from '../Theme';
import sharedStyles from '../Theme/sharedStyles';

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
    ...sharedStyles.noHighlight,
  },
  text: {
    marginLeft: 8,
    fontFamily: theme.font,
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    position: 'relative',
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
