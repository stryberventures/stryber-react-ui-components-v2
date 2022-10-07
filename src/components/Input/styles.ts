import { createStyles } from '../Theme';
import { IInput } from './index';

export default createStyles((theme) => ({
  inputRoot: {
    width: 320,
  },
  fullWidth: {
    width: '100%',
  },
  inputContainer: (props: IInput) => ({
    boxSizing: 'border-box',
    borderRadius: 4,
    position: 'relative',
    fontFamily: theme.font,
    display: 'flex',
    alignItems: 'center',
    padding: '5px 8px',
    backgroundColor: theme.background.default,
    height: 44,
    '&:focus-within:not($inputContainerError), &:not($inputContainerError)$highlighted': {
      border: `1px solid ${theme[props.color!].main}`,
      boxShadow: `0 0 0 4px ${theme[props.color!].light}`,
    },
    '&:not($inputContainerError)': {
      border: `1px solid ${theme.default.main}`,
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
      boxShadow: `0 0 0 4px ${theme.error.light}`,
    },
    '&:focus-within': {
      boxShadow: `0 0 0 4px ${theme.error.light}`,
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
    height: 17,
    padding: 0,
    width: '100%',
    color: theme.text.primary,
    fontSize: 14,
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
    fontSize: 14,
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
    height: 17,
    fontSize: 14,
  },
  textDisabled: {
    color: theme.text.disabled,
    '&::placeholder': {
      color: theme.text.disabled,
    }
  },
  message: {
    marginTop: 8,
  },
  withLabel: {},
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
  }
}));
