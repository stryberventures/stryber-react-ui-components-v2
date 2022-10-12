import { createStyles } from '../Theme';
import { ITextArea } from './index';

export default createStyles((theme) => ({
  textArea: (props: ITextArea) => ({
    boxSizing: 'border-box',
    width: 320,
    height: 143,
    borderRadius: 4,
    position: 'relative',
    fontFamily: theme.font,
    backgroundColor: theme.background.default,
    '&:focus-within:not($containerError)': {
      border: `1px solid ${theme[props.color!].main}`,
      boxShadow: `0 0 0 4px ${theme[props.color!].light}`,
    },
    '&:not($containerError)': {
      border: `1px solid ${theme.default.main}`,
      padding: '8px 15px',
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
    border: `1px solid ${theme.error.main}`,
    padding: '5px 8px',
    '&:focus-within': {
      boxShadow: `0 0 0 4px ${theme.error.light}`,
    },
  },
  textarea: {
    fontFamily: theme.font,
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: 104,
    width: '100%',
    padding: 0,
    marginTop: 8,
    color: theme.text.primary,
    fontSize: 14,
    resize: 'none',
    backgroundColor: theme.background.default,
    '-webkit-tap-highlight-color': 'transparent',
  },
  label: {
    color: theme.text.secondary,
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
  fullWidth: {}
}));
