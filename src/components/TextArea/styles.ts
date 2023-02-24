import { ITextArea } from './index';
import { createStyles, toRem } from '../Theme';


export default createStyles((theme) => ({
  textAreaWrapper: {
    // display: 'inline-block',
    width: 'fit-content',
    minWidth: toRem(320),
    minHeight: toRem(136),
  },
  fullWidth: {
    width: '100%',
  },
  textArea: (color: ITextArea['color']) => ({
    boxSizing: 'border-box',
    width: '100%',
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
    },
    '&:hover:active:not($containerError)': {
      border: `${toRem(1)} solid ${theme.colors[color!].medium400}`,
    },
    '&$containerError': {
      border: `${toRem(1)} solid ${theme.colors.error.main500}`,
    },
    '&:has($textarea:focus)': {
      boxShadow: 'none',
    },
    '&:has($textarea:focus-visible)': {
      boxShadow: `0 0 0 ${toRem(2)} white, 0 0 0 ${toRem(4)} ${theme.colors[color!].light200}`,
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
    color: theme.colors.text.secondary,
    lineHeight: '120%',
    marginBottom: toRem(8),
    '&$textDisabled': {
      color: theme.colors.text.disabled,
    },
  },
  labelOutside: {
    color: theme.colors.text.headline,
  },
  textarea: {
    position: 'relative',
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: toRem(114),
    width: '100%',
    padding: 0,
    color: theme.colors.text.headline,
    resize: 'none',
    backgroundColor: 'transparent',
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
    gridTemplateColumns: `1fr minmax(${toRem(40)}, ${toRem(64)})`,
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
