import { createStyles, toRem } from '../../components/Theme'


export default createStyles((theme) => ({
  inputToggleLayout: {
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      cursor: 'pointer',
    },
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
    width: '100%',
    '-webkit-tap-highlight-color': 'transparent',
  },
  text: {
    marginLeft: toRem(8),
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
    lineHeight: toRem(20),
  },
  small: {
    lineHeight: toRem(16),
  },
  title: {
    color: theme.colors.text.secondary,
  },
  label: {
    color: theme.colors.text.tint,
  },
  textDisabled: {
    color: theme.colors.text.disabled,
  },
  error: {
    marginTop: toRem(8),
  },
  heading: {
    marginBottom: toRem(12),
    color: theme.colors.contrast.black,
    fontWeight: 400,
    lineHeight: '150%',
    width: 'fit-content',
  },
  hint: {
    marginTop: toRem(8),
    color: theme.colors.neutralGray.main500,
    fontWeight: 400,
    lineHeight: toRem(20),
    width: 'fit-content',
  },
  controlContainer: {
    display: 'flex',
  },
  controlCentered: {
    alignItems: 'center',
  }
}), { internalUsage: true });
