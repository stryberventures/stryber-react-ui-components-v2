import { createStyles } from '../../styles';
import { IInput } from './index';

export default createStyles((theme) => ({
  container: (props: IInput) => ({
    boxSizing: 'border-box',
    width: 320,
    height: 44,
    borderRadius: 4,
    position: 'relative',
    fontFamily: theme.font,
    '&:focus-within:not($containerError)': {
      border: `1px solid ${theme[props.color!].main}`,
      outline: `4px solid ${theme[props.color!].light}`,
    },
    '&:not($containerError)': {
      border: `1px solid ${theme.default.main}`,
      padding: '5px 8px',
    }
  }),
  containerDisabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.default.light,
  },
  containerError: {
    border: `1px solid ${theme.error.main}`,
    padding: '5px 8px 5px 16px',
    '&:focus-within': {
      outline: `4px solid ${theme.error.light}`,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      height: 44,
      width: 8,
      left: -1,
      top: -1,
      backgroundColor: theme.error.main,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
    }
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
    '&::placeholder': {
      color: theme.text.hint,
    }
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
