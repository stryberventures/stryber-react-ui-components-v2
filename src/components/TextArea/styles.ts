import { ITextArea } from './index';
import { createStyles, toRem } from '../Theme';


export default createStyles((theme) => ({
  textAreaWrapper: {
    width: toRem(340),
    height: toRem(136),
    minHeight: toRem(136),
    boxSizing: 'border-box',
    '& *, &:after, &:before': {
      boxSizing: 'inherit',
    },
  },
  fullWidth: {
    width: '100%',
  },
  textArea: (color: ITextArea['color']) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    padding: `${toRem(8)} ${toRem(12)}`,
    borderRadius: toRem(4),
    position: 'relative',
    fontFamily: theme.font,
    backgroundColor: theme.colors.background.white,
    transition: 'background-color .3s, border-color .3s, box-shadow .3s',
    '& *': {
      fontFamily: theme.font,
    },
    '&:hover': {
      backgroundColor: theme.colors.background.extraLightGrey,
    },
    '&:not($containerError)': {
      border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
    },
    '&:hover:not($containerError)': {
      border: `${toRem(1)} solid ${theme.colors[color!].medium300}`,
      backgroundColor: theme.colors.neutralGray.extraLight50,
    },
    '&$containerError': {
      border: `${toRem(1)} solid ${theme.colors.error.main500}`,
    },
    '&:has($textarea:focus-visible)': {
      border: `${toRem(1)} solid ${theme.colors[color!].main500}`,
      boxShadow: `0 0 0 ${toRem(2)} white, 0 0 0 ${toRem(4)} ${theme.colors[color!].light200}`,
      '& $label': {
        fontSize: toRem(12),
        transform: `translateY(${toRem(-6)})`,
        marginBottom: 0,
      },
      '& $textarea': {
        transform: `translateY(${toRem(-6)})`,
      },
    },
    '&$fullWidth': {
      width: '100%',
    },
  }),
  containerDisabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.colors.background.white,
  },
  containerError: {},
  label: {
    position: 'relative',
    color: theme.colors.text.headline,
    height: toRem(24),
    marginBottom: toRem(8),
    transition: 'font-size .3s, transform .3s, margin-bottom .3s',
    '&$textDisabled': {
      color: theme.colors.text.disabled,
    },
  },
  textarea: {
    position: 'relative',
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    width: '100%',
    padding: 0,
    color: theme.colors.text.headline,
    resize: 'none',
    backgroundColor: 'transparent',
    transition: 'transform .3s',
    '-webkit-tap-highlight-color': 'transparent',
    '&::placeholder': {
      color: theme.colors.text.disabled,
      fontFamily: theme.font,
    },
    '&:disabled': {
      color: theme.colors.text.disabled,
      overflow: 'hidden',
    },
  },
  textDisabled: {},
  hintContainer: {
    display: 'grid',
    gap: toRem(8),
    gridTemplateColumns: '1fr minmax(0, max-content)',
    marginTop: toRem(8),
  },
  messagesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: toRem(8),
    gridColumns: 'span 1',
  },
  hint: {
    color: theme.colors.text.secondary,
  },
  lengthContainer: {
    textAlign: 'right',
  },
  error: {
    margin: 0,
  },
}), { internalUsage: true });
