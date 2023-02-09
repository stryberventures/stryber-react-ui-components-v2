import { createStyles, toRem } from '../Theme'


export default createStyles((theme) => ({
  inputToggleLayout: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    '& *, *:before, *:after': {
      boxSizing: 'inherit',
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
  title: {
    color: theme.colors.text.headline,
    lineHeight: '120%',
    margin: [0, theme.spacing[8], theme.spacing[8], theme.spacing[4]],
  },
  titleReverse: {
    textAlign: 'right',
  },
  labelContainer: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'auto 1fr',
    gap: toRem(10),
    position: 'relative',
    userSelect: 'none',
    height: '100%',
    width: 'fit-content',
    padding: [theme.spacing[4], theme.spacing[8], theme.spacing[4], theme.spacing[4]],
    '-webkit-tap-highlight-color': 'transparent',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  reverse: {
    gridTemplateColumns: '1fr auto',
    '& $inputContainer': {
      gridColumn: '2 / 3',
    },
    '& $textContainer': {
      gridColumn: 'span 1',
      marginRight: toRem(8),
      marginLeft: 0,
    },
    '&$fullWidth': {
      '& $textContainer': {
        alignItems: 'flex-start',
      },
    },
  },
  inputContainer: {
    gridColumn: '1 / 2',
    gridRow: '1',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: toRem(1),
  },
  input: () => ( {
    position: 'absolute',
    width: 0,
    height: 0,
  }),
  textContainer: {
    gridColumn: '2 / 3',
    gridRow: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: toRem(24),
  },
  label: {
    color: theme.colors.text.headline,
    lineHeight: '150%',
  },
  hint: {
    color: theme.colors.text.secondary,
    lineHeight: '120%',
    width: 'fit-content',
  },
  text: {
    marginLeft: toRem(10),
    fontFamily: theme.font,
    display: 'flex',
    flexDirection: 'column',
    fontSize: toRem(14),
    position: 'relative',
  },
  error: {
    marginLeft: theme.spacing['4'],
  },
  fullWidth: {
    width: '100%',
    '& $textContainer': {
      alignItems: 'flex-end',
    }
  },
  medium: {
  },
  small: {
  },
  textDisabled: {
    color: theme.colors.text.disabled,
  },
  controlContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}), { internalUsage: true });
