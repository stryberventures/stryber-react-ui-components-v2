import { createStyles, toRem } from '../Theme'


export default createStyles((theme) => ({
  inputToggleLayout: {
    display: 'flex',
    flexDirection: 'column',
  },
  disabled: {
    pointerEvents: 'none',
    '& $heading': {
      color: theme.colors.text.disabled
    },
    '& $hint': {
      color: theme.colors.text.disabled
    },
  },
  input: () => ( {
    position: 'absolute',
    width: 0,
    height: 0,
  }),
  container: {
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    width: 'fit-content',
    maxWidth: '100%',
    padding: [4, 8, 4, 4],
    '-webkit-tap-highlight-color': 'transparent',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  text: {
    marginLeft: toRem(10),
    fontFamily: theme.font,
    display: 'flex',
    flexDirection: 'column',
    fontSize: toRem(14),
    position: 'relative',
  },
  reverse: {
    '& $controlContainer': {
      flexDirection: 'row-reverse',
    },
    '& $text': {
      marginRight: toRem(8),
      marginLeft: 0,
    }
  },
  fullWidth: {
    justifyContent: 'space-between',
    width: '100%',
  },
  medium: {
  },
  small: {
  },
  title: {
    color: theme.colors.text.secondary,
  },
  label: {
    color: theme.colors.text.headline,
    lineHeight: '150%',
  },
  textDisabled: {
    color: theme.colors.text.disabled,
  },
  error: {
    marginLeft: theme.spacing['4'],
  },
  hint: {
    color: theme.colors.text.secondary,
    fontWeight: 400,
    lineHeight: '120%',
    width: 'fit-content',
  },
  controlContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  controlCentered: {
    alignItems: 'center',
  }
}), { internalUsage: true });
