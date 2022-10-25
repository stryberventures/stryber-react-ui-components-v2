import { createStyles } from '../Theme';
import toRem from '../Theme/toRem';
import { IInput } from './index';

export default createStyles((theme) => ({
  inputRoot: {
    width: toRem(320),
  },
  fullWidth: {
    width: '100%',
  },
  inputContainer: (props: IInput) => ({
    boxSizing: 'border-box',
    borderRadius: toRem(4),
    position: 'relative',
    fontFamily: theme.font,
    display: 'flex',
    alignItems: 'center',
    padding: [toRem(4), toRem(8)],
    height: toRem(44),
    backgroundColor: theme.background.default,
    '&:focus-within:not($inputContainerError), &:not($inputContainerError)$highlighted': {
      border: `1px solid ${theme[props.color!].main}`,
      boxShadow: `0 0 0 ${toRem(4)} ${theme[props.color!].light}`,
    },
    '&:not($inputContainerError)': {
      border: `${toRem(1)} solid ${theme.default.main}`,
    },
    '&$withLabel': {
      alignItems: 'initial',
    },
    '&$disabled': {
      backgroundColor: theme.background.disabled,
    }
  }),
  highlighted: {},
  inputContainerError: {
    border: `1px solid ${theme.error.main}`,
    '&$highlighted': {
      boxShadow: `0 0 0 ${toRem(4)} ${theme.error.light}`,
    },
    '&:focus-within': {
      boxShadow: `0 0 0 ${toRem(4)} ${theme.error.light}`,
    },
  },
  input: {
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      appearance: 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
    fontFamily: theme.font,
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: toRem(17),
    padding: 0,
    width: '100%',
    color: theme.text.primary,
    fontSize: toRem(14),
    backgroundColor: theme.background.default,
    '&::placeholder': {
      color: theme.text.hint,
    }
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  prefix: {
    fontSize: toRem(14),
    color: theme.text.primary,
    backgroundColor: theme.background.default,
    whiteSpace: 'nowrap',
  },
  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.background.disabled,
  },
  label: {
    color: theme.text.secondary,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    height: toRem(17),
    fontSize: toRem(14),
  },
  textDisabled: {
    color: theme.text.disabled,
    '&::placeholder': {
      color: theme.text.disabled,
    }
  },
  message: {
    marginTop: toRem(8),
  },
  withLabel: {},
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
  }
}));
