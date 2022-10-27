import { createStyles } from '../Theme';
import { ITextArea } from './index';
import toRem from '../../utils/toRem';


export default createStyles((theme) => ({
  textArea: (props: ITextArea) => ({
    boxSizing: 'border-box',
    width: toRem(320),
    height: toRem(143),
    borderRadius: toRem(4),
    position: 'relative',
    fontFamily: theme.font,
    backgroundColor: theme.background.default,
    '&:focus-within:not($containerError)': {
      border: `${toRem(1)} solid ${theme[props.color!].main}`,
      boxShadow: `0 0 0 ${toRem(4)} ${theme[props.color!].light}`,
    },
    '&:not($containerError)': {
      border: `${toRem(1)} solid ${theme.default.main}`,
      padding: `${toRem(8)} ${toRem(15)}`,
    },
    '&$fullWidth': {
      width: '100%',
    }
  }),
  containerDisabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.background.default,
  },
  containerError: {
    border: `${toRem(1)} solid ${theme.error.main}`,
    padding: `${toRem(5)} ${toRem(8)}`,
    '&:focus-within': {
      boxShadow: `0 0 0 ${toRem(4)} ${theme.error.light}`,
    },
  },
  textarea: {
    fontFamily: theme.font,
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: toRem(104),
    width: '100%',
    padding: 0,
    marginTop: toRem(8),
    color: theme.text.primary,
    fontSize: toRem(14),
    resize: 'none',
    backgroundColor: theme.background.default,
    '-webkit-tap-highlight-color': 'transparent',
  },
  label: {
    color: theme.text.secondary,
    height: toRem(17),
    fontSize: toRem(14),
  },
  textDisabled: {
    color: theme.text.disabled,
    backgroundColor: theme.background.default,
  },
  message: {
    marginTop: toRem(8),
    height: toRem(17),
    fontSize: toRem(14),
    fontFamily: theme.font,
  },
  fullWidth: {}
}));
