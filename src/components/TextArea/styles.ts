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
    backgroundColor: theme.colors.background.white,
    '&:focus-within:not($containerError)': {
      border: `${toRem(1)} solid ${theme.colors[props.color!].main500}`,
      boxShadow: `0 0 0 ${toRem(4)} ${theme.colors[props.color!].extraLight50}`,
    },
    '&:not($containerError)': {
      border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
      padding: `${toRem(8)} ${toRem(15)}`,
    },
    '&$fullWidth': {
      width: '100%',
    }
  }),
  containerDisabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.colors.background.white,
  },
  containerError: {
    border: `${toRem(1)} solid ${theme.colors.error.main500}`,
    padding: `${toRem(5)} ${toRem(8)}`,
    '&:focus-within': {
      boxShadow: `0 0 0 ${toRem(4)} ${theme.colors.error.light100}`,
    },
  },
  textarea: {
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: toRem(104),
    width: '100%',
    padding: 0,
    marginTop: toRem(8),
    color: theme.colors.text.headline,
    resize: 'none',
    backgroundColor: theme.colors.background.white,
    '-webkit-tap-highlight-color': 'transparent',
  },
  label: {
    color: theme.colors.text.secondary,
    height: toRem(17),
  },
  textDisabled: {
    color: theme.colors.text.disabled,
    backgroundColor: theme.colors.background.white,
  },
  message: {
    marginTop: toRem(8),
    height: toRem(17),
    fontSize: toRem(14),
    fontFamily: theme.font,
  },
  fullWidth: {}
}), { internalUsage: true });
