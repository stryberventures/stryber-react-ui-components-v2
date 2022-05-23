import { createStyles } from '../../styles';
import { ITextArea } from './index';

export default createStyles((theme) => ({
  container: (props: ITextArea) => ({
    boxSizing: 'border-box',
    width: 320,
    height: 143,
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
    backgroundColor: theme.background.default,
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
      height: 143,
      width: 8,
      left: -1,
      top: -1,
      backgroundColor: theme.error.main,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
    }
  },
  textarea: {
    fontFamily: theme.font,
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: 110,
    padding: '25px 0 0 0',
    width: '100%',
    color: theme.text.primary,
    fontSize: 14,
    resize: 'none',
  },
  label: {
    color: theme.text.secondary,
    position: 'absolute',
    height: 17,
    fontSize: 14,
  },
  textDisabled: {
    color: theme.text.disabled,
    backgroundColor: theme.background.default,
  },
  message: {
    marginTop: 8,
    height: 17,
    fontSize: 14,
    fontFamily: theme.font,
  },
  maxLength: {
    marginTop: 8,
    color: theme.text.hint,
    height: 17,
    fontSize: 14,
    fontFamily: theme.font,
  }
}));
