import { createStyles } from '../../styles';
import { IInput } from './index';

export default createStyles((theme) => ({
  root: {
    width: 320,
  },
  inputContainer: (props: IInput) => ({
    boxSizing: 'border-box',
    height: 44,
    borderRadius: 4,
    position: 'relative',
    fontFamily: theme.font,
    display: 'flex',
    padding: '5px 8px',
    backgroundColor: theme.background.default,
    '&:focus-within:not($inputContainerError)': {
      border: `1px solid ${theme[props.color!].main}`,
      outline: `4px solid ${theme[props.color!].light}`,
    },
    '&:not($inputContainerError)': {
      border: `1px solid ${theme.default.main}`,
    }
  }),
  inputContainerError: {
    border: `1px solid ${theme.error.main}`,
    '&:focus-within': {
      outline: `4px solid ${theme.error.light}`,
    },
  },
  input: {
    fontFamily: theme.font,
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: 17,
    padding: '17px 0 0 0',
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
    flexGrow: 1,
  },
  prefix: {
    paddingTop: 17,
    fontSize: 14,
    color: theme.text.primary,
    backgroundColor: theme.background.default,
    whiteSpace: 'nowrap',
  },
  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.background.default,
  },
  label: {
    color: theme.text.secondary,
    position: 'absolute',
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
}));
